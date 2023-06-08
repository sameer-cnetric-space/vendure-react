// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.175 2.91a12.42 12.42 0 01-3.555.974A6.206 6.206 0 0029.342.458 12.358 12.358 0 0125.41 1.96a6.193 6.193 0 00-10.55 5.648A17.58 17.58 0 012.1 1.138a6.188 6.188 0 00-.837 3.113 6.193 6.193 0 002.753 5.153 6.176 6.176 0 01-2.804-.774v.08a6.193 6.193 0 004.967 6.07 6.235 6.235 0 01-2.796.106 6.194 6.194 0 005.783 4.298 12.423 12.423 0 01-7.69 2.651c-.493 0-.987-.028-1.477-.086a17.508 17.508 0 009.489 2.781c11.389 0 17.615-9.433 17.615-17.613 0-.266-.007-.535-.019-.8a12.586 12.586 0 003.087-3.203l.003-.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */
