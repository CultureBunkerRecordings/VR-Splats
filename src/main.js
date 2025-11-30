import * as THREE from "three";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 50);

const viewer = new GaussianSplats3D.Viewer({
    renderer,
    camera,
    webXRMode: GaussianSplats3D.WebXRMode.VR,
});

await viewer.addSplatScene("/gs_TheseusAndMinotaurLuma.ply");

// Enter VR button
const btn = document.createElement("button");
btn.innerText = "ENTER VR";
document.body.appendChild(btn);

btn.onclick = async () => {
    const session = await navigator.xr.requestSession("immersive-vr", {
        optionalFeatures: ["local-floor"]
    });

    renderer.xr.setSession(session);
    viewer.startWebXRSession(session);
};

renderer.setAnimationLoop((t) => {
    viewer.update(t);
    viewer.render();
});
