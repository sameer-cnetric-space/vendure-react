// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PhoneLineIcon(props) {
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
          "M8.585 9.792a9.676 9.676 0 003.623 3.623l.81-1.135a.917.917 0 011.187-.272 10.47 10.47 0 004.2 1.25.917.917 0 01.845.915v4.09a.917.917 0 01-.823.912c-.486.05-.976.075-1.469.075-7.846 0-14.208-6.362-14.208-14.208 0-.494.025-.983.075-1.469a.917.917 0 01.912-.823h4.09a.917.917 0 01.914.844 10.47 10.47 0 001.25 4.201.917.917 0 01-.27 1.187l-1.136.81zM6.274 9.19l1.741-1.244A12.293 12.293 0 017.01 4.583H4.593a12.7 12.7 0 00-.009.459c0 6.834 5.54 12.375 12.374 12.375.153 0 .307-.003.459-.01V14.99a12.297 12.297 0 01-3.363-1.005l-1.244 1.741a11.4 11.4 0 01-1.455-.687l-.053-.03a11.51 11.51 0 01-4.31-4.31l-.03-.054a11.41 11.41 0 01-.688-1.455z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhoneLineIcon;
/* prettier-ignore-end */
