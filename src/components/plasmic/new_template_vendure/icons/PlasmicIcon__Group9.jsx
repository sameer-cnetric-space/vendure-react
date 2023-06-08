// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.822 0H1.1A1.1 1.1 0 000 1.1v15.4a1.1 1.1 0 001.1 1.1h15.403a1.1 1.1 0 001.1-1.1V8.788a1.1 1.1 0 00-2.2 0V16.5l1.1-1.1H1.1l1.1 1.1V1.1L1.1 2.2h7.722a1.1 1.1 0 000-2.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
