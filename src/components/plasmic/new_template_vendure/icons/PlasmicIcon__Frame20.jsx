// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21 8.25H10m-5.25 0H3M7.5 6a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM3 15.75h10.75m5 0H21m-4.5-2.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default Frame20Icon;
/* prettier-ignore-end */
