import Link from "next/link";
import { LinkData } from "../bottomNavigation/bottomNav";

import { motion } from "framer-motion";
import style from "./navLink.module.scss";
import { useRouter } from "next/router";

export const NavLink = ({ linkHref, linkName, icon }: LinkData) => {
  const router = useRouter();
  return (
    <Link href={linkHref}>
      <motion.div
        className={
          router.pathname === `${linkHref}` ? style.active : style.notActive
        }
        whileTap={{ scale: 1.1 }}
      >
        <span>{icon}</span>
        <span> {linkName}</span>
      </motion.div>
    </Link>
  );
};
