import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";

export const Test = () => {
    const map = useGLTF("models/maps/test.glb");

    useEffect(() => {
        map.scene.traverse((child) => {
            if (child.isMesh) {
                // child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    });

    return (
        <RigidBody colliders="trimesh" type="fixed">
            <primitive object={map.scene} />
        </RigidBody>
    )
};

useGLTF.preload("models/maps/test.glb");