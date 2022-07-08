import type { NextPage } from "next";
import Emoji from "@/components/Emoji";

const Home: NextPage = () => {
  return (
    <div className="flex ">
      <Emoji label="waving-hand" symbol="👋" classes="animate-waving-hand" />
    </div>
  );
};

export default Home;
