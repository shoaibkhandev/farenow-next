import React from "react";
import { ReactSVG } from "react-svg";

export default function Icon({ path, className, ...props }) {
  const prefix = "/static/icons/";
  return <ReactSVG {...props} className={`react-svg ${className ? className : ''}`} src={`${prefix}${path}.svg`} />;
}
