import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Collection from "../components/collection";

const Home: NextPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto m-20  px-2 md:px-1">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <h1 className="font-bold text-2xl mt-8 md:mt-0">Mint an NFT here</h1>
        <ConnectWallet />
      </div>
      <Collection />
    </div>
  );
};

export default Home;
