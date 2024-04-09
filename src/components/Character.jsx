/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useCharacterAnimations } from "../context/CharacterAnimations";

export default function Character(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/male/model.gltf");
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="MyCharacter">
          <skinnedMesh
            castShadow
            name="characterMedium"
            geometry={nodes.characterMedium.geometry}
            material={materials['skin.001']}
            skeleton={nodes.characterMedium.skeleton}
          />
          <primitive object={nodes.LeftFootCtrl} />
          <primitive object={nodes.RightFootCtrl} />
          <primitive object={nodes.HipsCtrl} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/male/model.gltf");