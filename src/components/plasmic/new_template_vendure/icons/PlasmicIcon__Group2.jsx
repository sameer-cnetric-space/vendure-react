// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 63 22"}
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
          "M62.293 0L16.737 19.336c-3.794 1.61-6.984 2.414-9.556 2.414-2.892 0-5-1.022-6.293-3.06-1.679-2.63-.945-6.865 1.932-11.33C4.528 4.749 6.7 2.349 8.823.058c-.501.812-4.898 8.135-.087 11.585.952.69 2.303 1.03 3.968 1.03 1.337 0 2.87-.217 4.556-.66L62.293 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
