// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.55 13.747a.55.55 0 01-.524-.718l.928-2.896c.081-.25.22-.477.406-.663L10.59.24a.54.54 0 01.181-.12 2.252 2.252 0 012.859 2.86.556.556 0 01-.12.18l-9.233 9.229a1.668 1.668 0 01-.663.405l-2.897.928a.71.71 0 11.933-1.074l-1.1 1.1zM11.273 1.115l-9.135 9.132a.557.557 0 00-.136.223L1.4 12.347l1.878-.601a.562.562 0 00.222-.136l9.136-9.132a1.17 1.17 0 00-1.363-1.363z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
