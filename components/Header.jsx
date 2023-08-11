import React from "react";
import BurgerMenu from "./BurgerMenu";
import BannerMenu from "./BannerMenu";
import styles from "../styles/Header.module.css";
import Footer from "./Footer";

export default function Header() {
  return (
    <nav className={styles["header-box-container"]}>
      <div className={styles["header-container"]}>
        <BannerMenu />
        <BurgerMenu />
      </div>

      <Footer />
    </nav>
  );
}
