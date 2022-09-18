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
  id: number;
  linkName: string;
  linkHref: string;
  icon: ReactNode;
}

export const links: LinkData[] = [
  {
    id: 1,
    linkName: "Home",
    linkHref: "/",
    icon: <BiHomeAlt size={20} />,
  },
  {
    id: 2,
    linkName: "Services",
    linkHref: "/services",
    icon: <AiFillCustomerService size={20} />,
  },
  {
    id: 3,
    linkName: "About",
    linkHref: "/about",
    icon: <FcAbout size={20} />,
  },
  {
    id: 4,
    linkName: "Contact",
    linkHref: "/contact",
    icon: <FcBusinessContact size={20} />,
  },
];

const BottomNav = () => {
  return (
    <div className={style.container}>
      {links.map((item: LinkData) => (
        <NavLink {...item} key={item.id} />
      ))}
    </div>
  );
};

export default BottomNav;
