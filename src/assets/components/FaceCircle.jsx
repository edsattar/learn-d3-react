export const FaceCircle = ({ width, strokeWidth }) => {
  return (
    <circle
      r={width / 2 - strokeWidth / 2}
      fill="yellow"
      stroke="black"
      strokeWidth={strokeWidth}
    />
  );
};