import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../context/CharacterAnimations";
import { Html } from "@react-three/drei";

export const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
    <div className="interface">
      {animations.map((animation, index) => (
      <button
          key={animation}
          variant={index === animationIndex ? "filled" : "light"}
          onClick={() => setAnimationIndex(index)}
      >
          {animation}
      </button>
      ))}
    </div>
  );
};

export default Interface;