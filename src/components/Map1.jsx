import { useGLTF } from "@react-three/drei"
import { useEffect } from "react";

export const Map1 = () => {
    const map = useGLTF("models/maps/map1.glb");

    useEffect(() => {
        map.scene.traverse((child) => {
            if (child.isMesh) {
                // child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    });

    return <primitive object={map.scene} />
};

useGLTF.preload("models/maps/map1.glb");