// src/components/SpiralSVG.jsx
import React from 'react';

const SpiralSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50,50
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
         a10,10 0 1,0 -20,0"
      fill="none"
      stroke="#ff6ec4"
      strokeWidth="0.5"
    />
  </svg>
);

export default SpiralSVG;

