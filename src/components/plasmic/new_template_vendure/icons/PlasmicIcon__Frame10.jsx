// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.313 5.626a4.687 4.687 0 119.375 0c0 .753-.241 1.61-.584 2.455-.347.852-.814 1.729-1.3 2.534a24.95 24.95 0 01-1.442 2.128c-.43.566-.823 1.02-1.07 1.217a.469.469 0 01-.585 0c-.246-.197-.639-.651-1.069-1.217a24.936 24.936 0 01-1.441-2.128 18.275 18.275 0 01-1.3-2.535c-.344-.844-.585-1.701-.585-2.454zM9 7.656a2.031 2.031 0 100-4.062 2.031 2.031 0 000 4.062z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame10Icon;
/* prettier-ignore-end */
