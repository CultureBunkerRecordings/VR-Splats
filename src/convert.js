import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

const compressionLevel = 1;
const splatAlphaRemovalThreshold = 5; // out of 255
const sphericalHarmonicsDegree = 1;
GaussianSplats3D.PlyLoader.loadFromURL('/gs_TheseusAndMinotaurLuma.ply',
                                        onProgress,
                                        progressiveLoad,
                                        onProgressiveLoadSectionProgress,
                                        minimumAlpha,
                                        compressionLevel,
                                        optimizeSplatData,
                                        sphericalHarmonicsDegree,
                                        headers)
.then((splatBuffer) => {
    GaussianSplats3D.KSplatLoader.downloadFile(splatBuffer, 'converted_file.ksplat');
});