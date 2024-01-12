import React from "react";
import { BannerContext } from "./Banner";

export default function Title({ children }) {
  const { type } = React.useContext(BannerContext);
  return <h1 className={`banner__title banner__title__${type}`}>{children}</h1>;
}
