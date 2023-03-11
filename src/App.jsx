// import './App.css'
import { arc } from 'd3';

function App() {
  const width = 960;
  const height = 500;
  const centerY = width / 2;
  const centerX = height / 2;
  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 20;
  const mouthWidth = 20;
  const mouthRadius = 140;

  const mouthArc = arc()

    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius - mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);

  return (
    <>
      <svg width={outerWidth} height={outerHeight}>
        <g transform={`translate(${centerX},${centerY})`}>
          <circle
            r={155}
            fill="yellow"
            stroke='black'
            strokeWidth={strokeWidth}
          />
          <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />

          <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />
          <path d={mouthArc()} />
        </g>
      </svg>

    </>
  )
}

export default App
