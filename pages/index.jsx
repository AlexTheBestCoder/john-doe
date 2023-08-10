// Home.js

import React from "react";
import Head from "next/head";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
      <title>John &amp; Doe | Architectes d&apos;Intérieur</title>
      </Head>
      <ParallaxProvider>
        <Parallax className={styles["box-container-home"]} y={[10, -10]}>
          <Header />
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default Home;
