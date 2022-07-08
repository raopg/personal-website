import type { NextPage } from "next";
import Emoji from "@/components/Emoji";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Head>
        <title>Prateek Rao</title>
      </Head>
      <Emoji
        label="waving-hand"
        symbol="👋"
        classes="animate-waving-hand text-6xl"
      />
    </div>
  );
};

export default Home;
