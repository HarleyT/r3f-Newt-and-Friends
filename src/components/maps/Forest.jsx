import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";

export const Forest = () => {
    const map = useGLTF("models/maps/Map1.gltf");

    // useEffect(() => {
    //     map.scene.traverse((child) => {
    //         if (child.isMesh) {
    //             child.castShadow = true;
    //             child.receiveShadow = true;
    //         }
    //     });
    // });

    return (
        <RigidBody type="fixed">
            <primitive object={map.scene} />
        </RigidBody>
    )
};

useGLTF.preload("models/maps/Map1.gltf");