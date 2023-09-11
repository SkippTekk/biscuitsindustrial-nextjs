import React from "react";

/**
 * SVG Icon of Eve Online Battlecruiser Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const BattlecruiserIcon = ({
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
      viewBox="0 0 29.104 31.363"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      >
        <path
          d="M27.78 14.164 14.551.935 1.322 14.164v10.583H27.78z"
          fill={fill || "#000"}
        />
        <path d="M1.32 30.039h26.458" fill="none" />
      </g>
    </svg>
  );
};
