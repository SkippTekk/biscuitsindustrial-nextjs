import React from "react";

/**
 * SVG Icon of Eve Online Cruiser Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const CruiserIcon = ({
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
      viewBox="0 0 29.104 26.071"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        strokeLinecap="square"
        strokeLinejoin="bevel"
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeWidth={2.646}
      >
        <path d="M27.78 14.17 14.551.941 1.322 14.17v10.583H27.78zM6.61 284.04v-2.646l-7.937-7.937 7.937-7.938h15.875l7.938 7.938-7.938 7.937v2.646l7.938 7.938-7.938 7.937H6.61l-7.937-7.938z" />
      </g>
    </svg>
  );
};
