import React from "react";

/**
 * SVG Icon of Eve Online Carrier Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const CarrierIcon = ({
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
      <path
        d="M14.56 35.72h5.292L33.08 22.491v-7.938L19.85 1.325H14.56L1.331 14.555v7.937z"
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      />
    </svg>
  );
};
