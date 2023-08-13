"use client"
import React, { useEffect } from "react";
import styles from "@/pages/page.module.css";
import Image from "next/image";

export default function LogoYcombinator() {
    const restartAnimation = () => {
        const container = document.querySelector(
          `.${styles["logo-ycombinator-box-container"]}`
        );
        
        container.classList.remove(styles["scroll-animation"]);
        void container.offsetWidth; // Forcibly trigger reflow
        container.classList.add(styles["scroll-animation"]);
        
        setTimeout(restartAnimation, 3000); // Redémarre l'animation après 3 secondes
      };
    
      useEffect(() => {
        restartAnimation(); // Démarrer l'animation au montage initial
      }, []);
  return (
    <div
      className={`${styles["logo-ycombinator-box-container"]} ${styles["scroll-animation"]}`}
    >
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} />
      </div>
    </div>
  );
}
