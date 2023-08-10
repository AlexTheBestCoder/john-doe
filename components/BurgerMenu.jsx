import React, { useState } from 'react';
import styles from '../styles/BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles['burger-menu']} ${isOpen ? styles.open : ''}`}>
      <div className={styles['burger-icon']} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <nav className={styles['menu-items']}>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
