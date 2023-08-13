import React from "react";
import Image from "next/image";
import styles from "@/pages/page.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-box-container"]}>
      <div className={styles["footer-box-content-1"]}>
        <h1>Pret pour votre prémière experience avec CAAURI CONSULTING ?</h1>
        <p>Reservez une consultation gratuite ou envoyez-nous un e-mail.</p>
        <div className={styles["contact"]}>
          <div>
            <Image src={"/call.svg"} height={32} width={32} />
            <p>(+225) 07 08 02 80 80</p>
          </div>
          <div>
            <Image src={"/email.svg"} height={32} width={32} />
            <p>Contact@caauri.com</p>
          </div>
          <div>
            <Image src={"/location.svg"} height={32} width={32} />
            <p>Pharmacie Azur,Angré</p>
          </div>
        </div>
      </div>
      <div className={styles["footer-box-content-2"]}>
        <div className={styles["box-content"]}>
          <div style={{ height: "70px", width: "404px" }}>
            <Image src={"/chat-group.svg"} height={70} width={70} />
            <p>Consultation gratuite</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
