<script lang="ts">
  import { onMount } from 'svelte';
  import { throttle } from 'lodash';
  import {
    Cache,
    FileLoader,
    Mesh,
    PerspectiveCamera,
    PlaneGeometry,
    Scene,
    ShaderMaterial,
    WebGLRenderer,
    GLSL3,
    CubeTextureLoader,
  } from 'three';

  Cache.enabled = true;
  const loader = new FileLoader();
  const cubeMapLoader = new CubeTextureLoader();
  onMount(async () => {
    window.addEventListener(
      'resize',
      throttle(handleResize, 50, { leading: false }),
    );

    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.getContext().canvas.width = window.innerWidth;
      renderer.getContext().canvas.height = window.innerHeight;
      (renderer.getContext().canvas as Element).style = "height: 100lvh !important;";
    }

    function animate(time: number) {
      camera.position.x = 15 * Math.sin(time * 0.00051);
      camera.position.z = 12 * Math.cos(time * 0.00041);
      camera.lookAt(0, 0, 0);
      quad.material.uniforms.u_Time = { value: time * 0.0005 };

      quad.material.uniforms.u_WindowWidth = {
        value: renderer.getContext().canvas.width,
      };
      quad.material.uniforms.u_WindowHeight = {
        value: renderer.getContext().canvas.height,
      };
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    const vert = loader.loadAsync('shaders/spheretracing/vert.3se');
    const frag = loader.loadAsync('shaders/spheretracing/frag.glsl');
    const cubeMap = cubeMapLoader
      .setPath('cubemaps/aurora/')
      .loadAsync([
        'px.webp',
        'nx.webp',
        'py.webp',
        'ny.webp',
        'pz.webp',
        'nz.webp',
      ]);

    const scene = new Scene();
    const renderer = new WebGLRenderer({
      canvas: document.getElementById('hero-canvas') as HTMLCanvasElement,
    });
    const camera = new PerspectiveCamera(
      50,
      renderer.getContext().canvas.width / renderer.getContext().canvas.height,
      0.1,
      2000,
    );
    handleResize();
    const quad = new Mesh(
      new PlaneGeometry(2, 2),
      new ShaderMaterial({
        vertexShader: (await vert) as string,
        fragmentShader: (await frag) as string,
        depthWrite: false,
        depthTest: false,
        glslVersion: GLSL3,

        uniforms: {
          u_Time: { value: 0 },
          u_WindowWidth: {
            value: renderer.getContext().canvas.width,
          },
          u_WindowHeight: {
            value: renderer.getContext().canvas.height,
          },
          u_InvProjection: { value: camera.projectionMatrixInverse },
          u_CameraToWorld: { value: camera.matrixWorld },
          u_CameraPosition: { value: camera.position },
          u_CubeMapTex: { value: await cubeMap },
        },
      }),
    );
    scene.add(quad);
    camera.position.z = 15;
    camera.position.y = 10;
    requestAnimationFrame(animate);
  });
</script>

<canvas
  class="fixed top-0 left-0 -z-50 w-full bg-black"
  style="height: 100lvh !important;"
  id="hero-canvas" />
