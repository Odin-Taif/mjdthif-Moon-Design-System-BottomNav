import { ReactNode } from "react";
//-=-=-=-=-=-=-componenets imports-=-=-=-=-=
import { NavLink } from "../navLink/navLink";
//-=-=-=-=-=-=-Icons imports-=-=-=-=-=
import { BiHomeAlt } from "react-icons/bi";
import { AiFillCustomerService } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
//-=-=-=-=-=-=style=-=-=-=-=-=-=-=-
import style from "./bottomNav.module.scss";

export interface LinkData {
  linkName: string;
  linkHref: string;
  icon: ReactNode;
}

export const links: LinkData[] = [
  {
    linkName: "Home",
    linkHref: "/",
    icon: <BiHomeAlt size={20} />,
  },
  {
    linkName: "Services",
    linkHref: "/services",
    icon: <AiFillCustomerService size={20} />,
  },
  {
    linkName: "About",
    linkHref: "/about",
    icon: <FcAbout size={20} />,
  },
  {
    linkName: "Contact",
    linkHref: "/contact",
    icon: <FcBusinessContact size={20} />,
  },
];

const BottomNav = () => {
  return (
    <div className={style.container}>
      {links.map((item: LinkData) => (
        <NavLink {...item} />
      ))}
    </div>
  );
};

export default BottomNav;
