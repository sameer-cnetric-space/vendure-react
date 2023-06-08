// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Filter2LineIcon(props) {
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
          "M12.833 12.833v5.5l-3.666 1.834v-7.334l-5.5-8.25V2.75h14.666v1.833l-5.5 8.25zM5.87 4.583L11 12.278l5.13-7.695H5.87z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Filter2LineIcon;
/* prettier-ignore-end */
