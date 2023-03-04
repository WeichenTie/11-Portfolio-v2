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
    CubeTexture,
} from "three";

Cache.enabled = true;



async function run(canvas: OffscreenCanvas) {

    console.log("HELLO");
    
    
    
    const loader = new FileLoader();
    const cubeMapLoader = new CubeTextureLoader();
    const vert = loader.loadAsync("/shaders/spheretracing/vert.3se");
    const frag = loader.loadAsync("/shaders/spheretracing/frag.glsl");
    
    // const cubeMap = cubeMapLoader
    //     .setPath("./cubemaps/aurora/")
    //     .loadAsync(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
    // const cube = new CubeTexture()
    function animate(time: number) {
        renderer.render(scene, camera);
        
        quad.material.uniforms.u_Time = { value: time * 0.001 };
        
        requestAnimationFrame(animate);
        // quad.material.uniforms.cameraToWorld = {
        //     value: camera.matrixWorld,
        // };
        // quad.material.uniforms.cameraInvProj = {
        //     value: camera.projectionMatrixInverse,
        // };
    }


    const scene = new Scene();
    const renderer = new WebGLRenderer({
        canvas: canvas,
    });

    const camera = new PerspectiveCamera(
        75,
        renderer.getContext().canvas.width / renderer.getContext().canvas.height,
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
                // u_CubeMapTex: { value: await cubeMap },

            },
        })
    );
    scene.add(quad);
    camera.position.z = 10;

    requestAnimationFrame(animate);
}

onmessage = (e) => {
    switch (e.data.type) {
        case "main":
            run(e.data.canvas)
            break;
        
    }
    console.log(e);
    
}