import React from "react";

/**
 * SVG Icon of Eve Online Frigate Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const FrigateIcon = ({
  width,
  height,
  fill,
  stroke,
}: ISvgSpecs): JSX.Element => {
  return (
    <svg
      width={width || 10}
      height={height || 10}
      viewBox="0 0 28.329 15.488"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.39 14.16 14.161.931.932 14.16z"
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      />
    </svg>
  );
};
