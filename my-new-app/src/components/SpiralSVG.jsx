//src/components/SpiralSVG.jsx
import React from "react";

const SpiralSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="spiralKhakiGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#d1d8c6" />
        <stop offset="45%" stopColor="#98a68b" />
        <stop offset="100%" stopColor="#69765e" />
      </linearGradient>
    </defs>

    <path
      d="
        M50,50
        m-40,0
        a40,40 0 1,0 80,0
        a40,40 0 1,0 -80,0
        m10,0
        a30,30 0 1,0 60,0
        a30,30 0 1,0 -60,0
        m10,0
        a20,20 0 1,0 40,0
        a20,20 0 1,0 -40,0
        m10,0
        a10,10 0 1,0 20,0
        a10,10 0 1,0 -20,0
      "
      fill="none"
      stroke="url(#spiralKhakiGradient)"
      strokeWidth="0.65"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

export default SpiralSVG;
```
