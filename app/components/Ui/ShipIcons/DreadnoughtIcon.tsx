import React from "react";

/**
 * SVG Icon of Eve Online Dreadnought Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const DreadnoughtIcon = ({
  width,
  height,
  fill,
  stroke,
}: ISvgSpecs): JSX.Element => {
  return (
    <svg
      width={width || 10}
      height={height || 10}
      viewBox="0 0 39.687 38.913"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.36 30.04H27.777l-7.938 7.938-7.937-7.938H1.319V19.457L19.84.936l18.521 18.521z"
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      />
    </svg>
  );
};
