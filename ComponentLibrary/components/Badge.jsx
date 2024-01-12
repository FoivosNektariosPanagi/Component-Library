import React from "react";
import classnames from "classnames";

export default function Badge({ children, className, type, variant, ...rest }) {
  let typeClass = type && `badge__${type}`; //square,pill
  let variantClass = variant && `badge__${variant}`; //gray,red,yellow,green,blue,indigo,purple,pink
  const allClasses = classnames(typeClass, variantClass, className, "badge");

  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}
