import React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" && (
        <Link className={styles.hello} href={"/nos-projets"}>
          <h1>
            Entrer
            <Image src={"/images/fleche-droite.png"} width={64} height={64} />
          </h1>
        </Link>
      )}
    </>
  );
}
