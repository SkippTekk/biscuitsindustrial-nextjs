import React from "react";

/**
 * SVG Icon of Eve Online Destoyer Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #fff
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const DestroyerIcon = ({
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
      viewBox="0 0 29.104 20.779"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={fill || "#fff"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      >
        <path d="M27.78 14.17 14.551.941 1.322 14.17z" fill="#000" />
        <path d="M1.32 19.46h26.458" fill="none" />
      </g>
    </svg>
  );
};
