// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 79 79"}
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
          "M68.661 28.508l-43.04 18.257c-3.584 1.52-6.599 2.279-9.028 2.279-2.733 0-4.724-.965-5.947-2.89-1.586-2.485-.893-6.48 1.827-10.699 1.616-2.465 3.669-4.727 5.67-6.892-.47.765-4.627 7.68-.082 10.937.9.654 2.178.974 3.75.974 1.262 0 2.71-.206 4.303-.621l42.547-11.346z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame4Icon;
/* prettier-ignore-end */
