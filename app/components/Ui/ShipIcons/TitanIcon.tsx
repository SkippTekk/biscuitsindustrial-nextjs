import React from "react";

/**
 * SVG Icon of Eve Online Capitals
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const TitanIcon = ({
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
      viewBox="0 0 29.104 38.913"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      >
        <path d="m1.32 22.1 10.583-10.583h5.292L27.778 22.1v-7.938L14.548.933 1.32 14.163z" />
        <path d="m1.32 37.97 10.583-10.583h5.292L27.778 37.97v-7.938L17.195 19.45h-5.292L1.32 30.032z" />
      </g>
    </svg>
  );
};
