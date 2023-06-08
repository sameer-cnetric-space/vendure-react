// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MapPinUserLineIcon(props) {
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
          "M15.66 14.494a6.417 6.417 0 10-9.32 0A5.495 5.495 0 0111 11.917a5.496 5.496 0 014.66 2.577zm-7.974 1.35L11 19.158l3.314-3.312a3.666 3.666 0 00-6.628 0zM11 21.752l-5.834-5.834a8.25 8.25 0 1111.668 0L11 21.751zm0-12.584a.917.917 0 100-1.834.917.917 0 000 1.834zM11 11a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MapPinUserLineIcon;
/* prettier-ignore-end */
