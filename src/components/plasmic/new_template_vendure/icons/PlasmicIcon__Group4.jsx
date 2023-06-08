// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 21"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.846 8.508L20.2 1H3.585L1 8.323v11.692h21.846V8.508zM4.262 1.923h15.261l2.154 6.092H2.107l2.155-6.092zm17.6 17.23H1.922V8.939h20l-.061 10.216z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".692"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.582 11.645l-.092-.099a.692.692 0 00-.988-.023l-3.96 3.85-1.259-1.225a.692.692 0 00-.979.014l-.01.01-.092.098a.692.692 0 00.023.97l1.835 1.783a.692.692 0 00.965 0l4.534-4.408a.692.692 0 00.023-.97z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
