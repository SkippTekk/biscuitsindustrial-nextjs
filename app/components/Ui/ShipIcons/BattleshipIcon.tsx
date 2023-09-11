import React from "react";

/**
 * SVG Icon of Eve Online Battleship Ships
 * @param width int - integer value - default 10
 * @param height string - integer value - default 10
 * @param fill string - six digit hex code (ex. "#000000") - default #000
 * @param stroke string - six digit hex code (ex. "#000000") - default #fff
 * @returns
 */
export const BattleshipIcon = ({
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
      viewBox="0 0 29.104 33.621"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={fill || "#000"}
        stroke={stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={2.646}
      >
        <path d="M11.91 141.165h5.292l13.229-13.229v-7.938L17.2 106.77H11.91L-1.319 120v7.937zM33.07 82.956H22.487l-7.938 7.938-7.937-7.938H-3.971V72.373L14.55 53.852l18.521 18.521zM1.32 32.685l10.583-10.583h5.292l10.583 10.583V14.164L14.548.935 1.32 14.164z" />
      </g>
    </svg>
  );
};
