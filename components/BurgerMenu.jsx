import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${styles["burger-menu"]} ${isOpen ? styles.open : ""}`}>
      <div className={styles["burger-icon"]} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={styles["menu-items"]}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8 }}
          >
            <ul>
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <button onClick={closeMenu}>Fermer</button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
