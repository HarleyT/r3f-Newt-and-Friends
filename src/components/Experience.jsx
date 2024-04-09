// import { OrbitControls } from "@react-three/drei";
import { ContactShadows, Environment } from "@react-three/drei";
import {
  CuboidCollider,
  CylinderCollider,
  RigidBody,
} from "@react-three/rapier";
import { CharacterController } from "./CharacterController";
import { Map1 } from "./Map1";
import Interface from "./Interface";
export const Experience = () => {

  return (
    <>
      {/* <OrbitControls /> */}
      {/* LIGHTS */}
      <Environment preset="sunset" />
      <directionalLight
        position={[25, 35, -25]}
        intensity={2}
        castShadow
        shadow-camera-near={0}
        shadow-camera-far={80}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-width={4096}
        shadow-camera-height={4096}
        shadow-bias={-0.0001}
        color={"#9e69da"}
      />

      {/* BACKGROUND */}

      <group position-y={-1}>
        {/* FLOOR */}
        <RigidBody colliders={false} type="fixed" name="void">
          <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshBasicMaterial color="#e3daf7" toneMapped={false} />
          </mesh>
          <CuboidCollider position={[0, -3.5, 0]} args={[50, 0.1, 50]} sensor />
        </RigidBody>
        <ContactShadows
          frames={1}
          position={[0, -0.88, 0]}
          scale={80}
          opacity={0.42}
          far={50}
          blur={0.8}
          color={"#aa9acd"}
        />
        {/* STAGE */}
        {/* <Stage position-y={-0.92} /> */}
        <Map1 />
        <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
        >
          <CylinderCollider args={[1 / 2, 20]} />
        </RigidBody>

        {/* CHARACTER */}
        <CharacterController />

      </group>
    </>
  );
};
