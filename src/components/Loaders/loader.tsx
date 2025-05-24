import React from 'react';

const Loader = () => {
  return (
    <div>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" width="50" height="50">
        <title>GD</title>
        <g transform="translate(-8, -2)">
          <g transform="translate(11, 5)">
            <polygon points="39 0 0 22 0 67 39 90 78 68 78 23" fill="none" className="stroke-green" strokeWidth="5" />
            <text x="28%" y="50%" fontSize="30" className="fill-green" dominantBaseline="middle">
              G
            </text>
            <text x="50%" y="50%" fontSize="30" className="fill-green" dominantBaseline="middle">
              D
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
