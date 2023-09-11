import React from "react";

/**
 * SVG Icon of Eve Online Mining Frigate Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const MiningFrigateIcon = ({
  width,
  height,
  fill,
  stroke,
}: ISvgSpecs): JSX.Element => {
  return (
    <svg
      width={width || 10}
      height={height || 10}
      viewBox="0 0 23.812 13.229"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m22.48 3.97-2.646-2.646H3.96L1.313 3.97v7.938H22.48z"
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      />
    </svg>
  );
};
