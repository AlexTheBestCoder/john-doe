// BannerMenu.js

import React from "react";
import { useRouter } from 'next/router';
import styles from '../styles/BannerMenu.module.css'

export default function BannerMenu() {
  const router = useRouter();

  return (
    <div className={styles["header-banner"]}>
      <h1>John & Doe</h1>
      {router.pathname === '/' && <h2>Architectes d&apos;intérieur</h2>}
    </div>
  );
}
