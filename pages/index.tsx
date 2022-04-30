import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Taskbar, Background, Desktop } from "../components";

const Home: NextPage = () => {
  return (
    <Background>
      <Head>
        <title>Benjamin Reilly</title>
        <meta name="description" content="Ben Reilly's site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Desktop />
      <Taskbar />
    </Background>
  );
};

export default Home;
