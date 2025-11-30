import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

const viewer = new GaussianSplats3D.Viewer({
    'cameraUp': [0, -1, 0],
    'initialCameraPosition': [1.6, 0, 0],
    'initialCameraLookAt': [0, 0, 0]
});
viewer.addSplatScene('/thereminsplat.splat', {
    'splatAlphaRemovalThreshold': 5,
    'showLoadingUI': true,
    'position': [0, 1, 0],
    'rotation': [0, 0, 0, 1],
    'scale': [1.5, 1.5, 1.5],
    'webXRMode': GaussianSplats3D.WebXRMode.None
})
.then(() => {
    viewer.start();
});