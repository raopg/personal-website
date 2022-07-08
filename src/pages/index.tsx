import type { NextPage } from "next";
import Emoji from "@/components/Emoji";
import Head from "next/head";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Head>
        <title>Prateek Rao</title>
      </Head>
      <Emoji
        label="waving-hand"
        symbol="👋"
        classes="animate-waving-hand text-6xl"
      />
      <div className="text-4xl p-8 ml-8">I&#8217;m Prateek Rao</div>
      <div className="flex flex-row justify-space-between">
        <button className="w-10 h-10 flex justify-center items-center">
          <BsGithub className="text-2xl" />
        </button>
        <button className="w-10 h-10 flex justify-center items-center">
          <BsLinkedin className="text-2xl" />
        </button>
        <button className="w-10 h-10 flex justify-center items-center">
          <MdEmail className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Home;
