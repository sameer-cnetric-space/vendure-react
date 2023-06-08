// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 22"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.231 3.338a3.702 3.702 0 00-1.018-1.688 4.054 4.054 0 00-1.778-.986C25.939.007 15.94.007 15.94.007A101.81 101.81 0 003.461.63a4.2 4.2 0 00-1.778 1.01A3.85 3.85 0 00.65 3.337a38.66 38.66 0 00-.648 7.301c-.016 2.447.2 4.89.648 7.301a3.756 3.756 0 001.03 1.687 4.11 4.11 0 001.782.987c2.53.657 12.48.657 12.48.657 4.173.047 8.346-.161 12.494-.625a4.053 4.053 0 001.778-.986 3.697 3.697 0 001.017-1.688c.458-2.406.681-4.852.666-7.302a35.333 35.333 0 00-.665-7.332v.001zm-18.47 11.85V6.09l8.32 4.55-8.32 4.55z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
