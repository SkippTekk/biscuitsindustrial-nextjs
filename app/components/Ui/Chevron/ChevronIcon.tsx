import React from "react";

/**
 * Chevron Icon
 *
 * @param className - string
 * @param width - number
 * @param height - number
 * @param fill - string - six digit hex code (ex. "#000000") - default #000
 * @param stroke - string - six digit hex code (ex. "#000000") - default #fff
 * @returns SVG
 */
const ChevronIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: ISvgSpecs): JSX.Element => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width || 10}
      height={height || 10}
      viewBox="0 0 24 24"
      fill={fill || "#000"}
    >
      <path
        d="M6 15L12 9L18 15"
        stroke={stroke || "#fff"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
