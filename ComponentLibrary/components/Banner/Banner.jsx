import React from "react";
import classnames from "classnames";
import checkCircleImage from "../images/Check circle.svg";
import exclamationImage from "../images/Exclamation.svg";
const BannerContext = React.createContext();
export { BannerContext };
export default function Banner({ children, type, className, ...rest }) {
  let typeClass = type && `banner__${type}`;
  const allClasses = classnames(typeClass, className, "banner");

  let imgUrl = "";
  switch (type) {
    case "success":
      imgUrl = checkCircleImage;
      break;
    case "warning":
      imgUrl = exclamationImage;
      break;
    default:
      break;
  }
  return (
    <BannerContext.Provider value={{ type }}>
      <div className={allClasses} {...rest}>
        <img src={imgUrl} alt={`Banner ${type} icon`} />
        <div className="banner__wraper">
        {children}
        </div>
      </div>
    </BannerContext.Provider>
  );
}
