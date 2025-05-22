import React from 'react';

const Loader = () => {
  return (
    <div className="text-amber-200">
      Loader
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 84 96"
        width="100"
        height="100"
      >
        <title>Logo</title>
        <g transform="translate(-8, -2)">
          <g transform="translate(11, 5)">
            <polygon
              points="39 0 0 22 0 67 39 90 78 68 78 23"
              fill="none"
              stroke="black"
              stroke-width="2"
            />
            <text
              x="28%"
              y="50%"
              font-size="20"
              fill="black"
              dominant-baseline="middle"
            >
              G
            </text>
            <text
              x="50%"
              y="50%"
              font-size="20"
              fill="black"
              dominant-baseline="middle"
            >
              D
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
