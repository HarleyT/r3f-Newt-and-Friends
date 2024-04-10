import { useCharacterAnimations } from "../context/CharacterAnimations";
import { Button } from "./ui/button";

export const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
    <div className="interface">
      {animations.map((animation, index) => (
      <Button
          key={animation}
          variant={index === animationIndex ? "filled" : "light"}
          onClick={() => setAnimationIndex(index)}
      >
          {animation}
      </Button>
      ))}
    </div>
  );
};

export default Interface;