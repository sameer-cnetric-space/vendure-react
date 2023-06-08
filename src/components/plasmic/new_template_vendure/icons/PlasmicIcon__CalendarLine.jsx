// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CalendarLineIcon(props) {
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
          "M15.583 2.75h3.667a.917.917 0 01.917.917v14.666a.917.917 0 01-.917.917H2.75a.917.917 0 01-.917-.917V3.667a.917.917 0 01.917-.917h3.667V.917H8.25V2.75h5.5V.917h1.833V2.75zM13.75 4.583h-5.5v1.834H6.417V4.583h-2.75V8.25h14.666V4.583h-2.75v1.834H13.75V4.583zm4.583 5.5H3.667v7.334h14.666v-7.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalendarLineIcon;
/* prettier-ignore-end */
