import React from "react";

/**
 * SVG Icon of Eve Online Industrial Command Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const IndustrialCommandIcon = ({
  width,
  height,
  fill,
  stroke,
}: ISvgSpecs): JSX.Element => {
  return (
    <svg
      width={width || 10}
      height={height || 10}
      viewBox="0 0 34.396 26.071"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m33.08 6.62-5.292-5.292H6.621L1.33 6.62v18.521l7.937-7.937h15.875l7.938 7.937z"
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      />
    </svg>
  );
};
