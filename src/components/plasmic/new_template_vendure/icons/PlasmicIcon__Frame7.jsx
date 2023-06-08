// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 0c-2.734 0-5.25.666-7.55 2A14.741 14.741 0 002 7.45C.666 9.75 0 12.266 0 15s.666 5.25 2 7.55A14.742 14.742 0 007.45 28c2.3 1.334 4.816 2 7.55 2s5.25-.666 7.55-2A14.742 14.742 0 0028 22.55c1.334-2.3 2-4.816 2-7.55s-.666-5.25-2-7.55A14.742 14.742 0 0022.55 2C20.25.666 17.734 0 15 0zm3.9 15h-2.5v9H13v-9h-2.2v-3.1H13V10c0-1.4.234-2.4.7-3 .534-.734 1.5-1.1 2.9-1.1h2.5V9h-1.5c-.534 0-.866.084-1 .25-.134.166-.2.484-.2.95v1.5h2.7l-.2 3.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame7Icon;
/* prettier-ignore-end */
