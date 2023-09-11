import React from "react";

/**
 * SVG Icon of Eve Online Freighter Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const FreighterIcon = ({
  width,
  height,
  fill,
  stroke,
}: ISvgSpecs): JSX.Element => {
  return (
    <svg
      width={width || 10}
      height={height || 10}
      viewBox="0 0 34.396 37.042"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      >
        <path d="m33.08 6.62-5.292-5.292H6.621L1.33 6.62v18.521l5.291-5.292h21.167l5.292 5.292z" />
        <path d="M9.26 25.14h15.875l5.292 5.292-5.292 5.291H9.26l-5.292-5.291z" />
      </g>
    </svg>
  );
};
