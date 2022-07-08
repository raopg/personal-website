import type { NextPage } from "next";
import { Emoji, Link } from "@components";
import Head from "next/head";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdDownload } from "react-icons/md";
import {
  EMAIL,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  RESUME,
} from "@constants/externalLinks";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Head>
        <title>Prateek Rao</title>
      </Head>
      <Emoji label="waving-hand" symbol="👋" classes="animate-wave text-6xl" />
      <div className="text-4xl p-8">I&#8217;m Prateek Rao</div>
      <div className="flex flex-row justify-center">
        <Link to={GITHUB_PROFILE}>
          <BsGithub className="text-2xl cursor-pointer" />
        </Link>
        <Link to={LINKEDIN_PROFILE}>
          <BsLinkedin className="text-2xl cursor-pointer" />
        </Link>
        <Link to={EMAIL}>
          <MdEmail className="text-3xl cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
