<script lang="ts">
    import { onMount } from "svelte";
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
    } from "three";
    var running = false;

    
    // import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
    Cache.enabled = true;
    const loader = new FileLoader();
    const cubeMapLoader = new CubeTextureLoader();
    onMount(async () => {
        if (running) {return};
        running = true;
        const vert = loader.loadAsync("shaders/spheretracing/vert.3se");
        const frag = loader.loadAsync("shaders/spheretracing/frag.glsl");
        const cubeMap = cubeMapLoader
            .setPath("cubemaps/aurora/")
            .loadAsync([
                "px.png",
                "nx.png",
                "py.png",
                "ny.png",
                "pz.png",
                "nz.png",
            ]);

        function animate(time: number) {
            camera.lookAt(0, 0, 0);
            camera.translateX(0.1);
            quad.material.uniforms.u_Time = { value: time * 0.001 };
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        const scene = new Scene();
        const renderer = new WebGLRenderer({
            canvas: document.getElementById("hero-canvas") as HTMLCanvasElement,
        });

        const camera = new PerspectiveCamera(
            75,
            renderer.getContext().canvas.width /
                renderer.getContext().canvas.height,
            0.1,
            2000
        );
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
            })
        );
        scene.add(quad);
        camera.position.z = 10;

        requestAnimationFrame(animate);


    });
</script>

<canvas class="fixed top-0 left-0 -z-50" id="hero-canvas" width={window.innerWidth} height={window.innerHeight} />
