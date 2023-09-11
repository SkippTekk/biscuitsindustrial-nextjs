import React from "react";

/**
 * SVG Icon of Eve Online Industrial Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const IndustrialIcon = ({
  width,
  height,
  fill,
  stroke,
}: ISvgSpecs): JSX.Element => {
  return (
    <svg
      className="ship__icon"
      width={width || 10}
      height={height || 10}
      viewBox="0 0 29.104 23.812"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      >
        <path d="m27.78 6.61-5.292-5.292H6.613L1.322 6.61v10.583H27.78zM1.32 22.49h26.458" />
      </g>
    </svg>
  );
};
