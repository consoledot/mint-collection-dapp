import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import { NFT } from "../../types/nft";
import { contractAddress } from "../../utils/constant";
const Card = ({
  nft,
  onMint,
}: {
  nft: NFT;
  onMint: (id: number) => Promise<void>;
}) => {
  return (
    <div className="w-100 self-start ">
      {nft?.url && <MediaRenderer src={nft.url} />}

      <div className="mb-2 mt-2">
        <div className="flex justify-between mb-4">
          <h2>{nft?.name}</h2>
          <p className="font-bold">{nft?.price} BNB</p>
        </div>

        <p>{nft?.description}</p>
      </div>
      <Web3Button
        contractAddress={contractAddress}
        isDisabled={nft?.minted}
        action={() => onMint(nft?.id)}
      >
        {nft.minted ? "NFT Minted" : "Mint"}
      </Web3Button>
    </div>
  );
};

export default Card;
