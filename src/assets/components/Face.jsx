import { Mouth } from "./Mouth";
import { Eyes } from "./Eyes";
import { FaceContainer } from "./FaceContainer";
import { FaceCircle } from "./FaceCircle";

export const Face = () => {
const width = 500;
const height = 500;
const strokeWidth = 20;
const eyeOffsetX = width / 6;
const eyeOffsetY = 100;
const eyeRadius = 20;
const mouthWidth = 20;
const mouthRadius = 140;
  return (
    <FaceContainer {...{ width, height}}>
      <FaceCircle {...{ width, strokeWidth }} />
      <Eyes {...{ eyeOffsetX, eyeOffsetY, eyeRadius }} />
      <Mouth {...{ mouthRadius, mouthWidth }} />
    </FaceContainer>
  );
};