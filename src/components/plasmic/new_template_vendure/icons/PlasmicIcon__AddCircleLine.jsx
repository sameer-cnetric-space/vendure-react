// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AddCircleLineIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.083 10.083V6.417h1.834v3.666h3.666v1.834h-3.666v3.666h-1.834v-3.666H6.417v-1.834h3.666zM11 20.167A9.166 9.166 0 011.833 11 9.166 9.166 0 0111 1.833 9.166 9.166 0 0120.167 11 9.166 9.166 0 0111 20.167zm0-1.834a7.334 7.334 0 100-14.667 7.334 7.334 0 000 14.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AddCircleLineIcon;
/* prettier-ignore-end */
