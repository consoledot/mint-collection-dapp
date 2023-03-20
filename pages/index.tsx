import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { contractAddress } from "../utils/constant";
import Collection from "../components/collection";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mint Collection Dapp</title>
        <meta name="description" content="Mint collection daap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1200px] mx-auto m-20  px-2 md:px-1 ">
        <div className="flex justify-between items-center flex-col-reverse md:flex-row">
          <h1 className="font-bold text-2xl mt-8 md:mt-0">
            Available NFTs to Mint
          </h1>
          <ConnectWallet />
        </div>
        <Collection />
        <div className="flex items-center ">
          <a
            href={`https://bscscan.com/address/${contractAddress}`}
            target="_blank"
            className="bg-black p-3 border-2 cursor-pointer mt-5 text-center mx-auto hover:bg-slate-800"
          >
            View on BscScan
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
