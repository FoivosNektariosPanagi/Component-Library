import React from "react";
import { BannerContext } from "./Banner";

export default function Content({ children }) {
  const { type } = React.useContext(BannerContext);
  return (
    <div className={`banner__content banner__content__${type}`}>{children}</div>
  );
}
