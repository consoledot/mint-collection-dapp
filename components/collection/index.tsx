import { useEffect, useState } from "react";
import Card from "../card";
import { NFT } from "../../types/nft";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { contractAddress } from "../../utils/constant";
import { nfts } from "../../data/nfts";

const Collection = () => {
  const address = useAddress();
  const { contract } = useContract(contractAddress, "nft-collection");
  const { data: ownNfts, isLoading } = useOwnedNFTs(contract, address);
  const [nftsData, setNftsData] = useState<NFT[] | []>([]);

  const fetchCollection = async () => {
    if (!isLoading && address) {
      //   This checks if any of the nfts is already part of the ownersNTFs,
      //    if it's already minted add a new property "minted" to nfts and set as true for the minted nft,
      //   if not return nfts
      if (!ownNfts) return nfts;
      ownNfts.forEach((nft) => {
        const index = nfts.findIndex(
          // @ts-ignore
          (item) => item.id === nft.metadata.attributes[0].id
        );

        if (index !== -1) {
          nfts[index].minted = true;
        }
      });
      setNftsData(nfts);
    }
  };
  const mintNFT = async (id: number) => {
    const mintedNft = ownNfts?.find(
      // @ts-ignore
      (nft) => nft.metadata.attributes[0].id == id
    );
    if (mintedNft) {
      nfts[id].minted = true;
      return;
    }
    const { name, description, url, price } = nfts.find(
      (nft) => nft.id === id
    )!;
    const metadata = {
      metadata: {
        name,
        description,
        image: url,
        attributes: [{ id }],
      },
      price,
      to: address!,
    };

    try {
      const signature = await contract?.signature.generate(metadata);
      await contract?.signature.mint(signature!);

      nfts[id].minted = true;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setNftsData([]);
    fetchCollection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownNfts, isLoading, address]);
  return (
    <section className="flex flex-col items-center justify-center mx-auto w-full my-10">
      <div className="flex justify-center">
        {!address ? (
          <h1 className="text-3xl mt-2 md:mt-7 text-center">
            Connect Your Wallet: Binance Smart Chain (Mainnet)
          </h1>
        ) : (
          isLoading && (
            <>
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mr-20 ml-20 mt-20  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </>
          )
        )}
      </div>

      <div className="flex flex-wrap justify-center md:justify-around gap-6 md:gap-14 w-full max-w-[1200px] ">
        {nftsData &&
          address &&
          nftsData.length > 0 &&
          nftsData.map((nft) => (
            <Card key={nft.id} nft={nft} onMint={mintNFT} />
          ))}
      </div>
    </section>
  );
};

export default Collection;
