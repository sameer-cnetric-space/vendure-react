// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame6Icon(props) {
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
          "M15 0c-2.734 0-5.25.666-7.55 2A14.741 14.741 0 002 7.45C.666 9.75 0 12.266 0 15s.666 5.25 2 7.55A14.742 14.742 0 007.45 28c2.3 1.334 4.816 2 7.55 2s5.25-.666 7.55-2A14.742 14.742 0 0028 22.55c1.334-2.3 2-4.816 2-7.55s-.666-5.25-2-7.55A14.742 14.742 0 0022.55 2C20.25.666 17.734 0 15 0zm7.5 11.6v.5c0 1.734-.416 3.4-1.25 5A10.232 10.232 0 0117.7 21c-1.666 1.066-3.534 1.6-5.6 1.6A10.668 10.668 0 016.4 21h.9c1.734 0 3.266-.534 4.6-1.6-.8 0-1.516-.25-2.15-.75A4.053 4.053 0 018.4 16.7l.7.2c.466 0 .8-.066 1-.2a3.337 3.337 0 01-2.15-1.25 3.641 3.641 0 01-.85-2.35c.534.334 1.1.5 1.7.5-1.134-.666-1.7-1.7-1.7-3.1 0-.666.166-1.3.5-1.9 1 1.2 2.15 2.134 3.45 2.8 1.32.672 2.77 1.047 4.25 1.1-.134-.2-.2-.5-.2-.9 0-1 .366-1.866 1.1-2.6.734-.734 1.6-1.1 2.6-1.1s1.934.366 2.8 1.1c.6-.134 1.4-.434 2.4-.9-.266.934-.8 1.6-1.6 2h.1c.934-.2 1.6-.4 2-.6-.666.866-1.334 1.566-2 2.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame6Icon;
/* prettier-ignore-end */
