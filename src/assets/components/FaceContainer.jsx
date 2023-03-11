export const FaceContainer = ({
  children,
  width,
  height
}) => {
  const centerX = (width) / 2;
  const centerY = (height) / 2;
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>{children}</g>
    </svg>
  );
};
