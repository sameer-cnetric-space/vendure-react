// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 7v8.5a2 2 0 002 2h12a2 2 0 002-2V7H2zm8-7a6.002 6.002 0 015.917 5H18a2 2 0 012 2v8.5a4 4 0 01-4 4H4a4 4 0 01-4-4V7a2 2 0 012-2h2.083A6.002 6.002 0 0110 0zm0 2a4.002 4.002 0 00-3.874 3h7.748A4.002 4.002 0 0010 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
