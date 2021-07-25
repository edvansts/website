import React from "react";
import Head from "next/head";

import Header from "../components/header/Header";
import HomeSection from "../components/home/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Edvan Matos</title>
      </Head>

      <Header />

      <main>
        <HomeSection />
      </main>
    </>
  );
}
