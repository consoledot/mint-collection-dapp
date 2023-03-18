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
    <div className="w-100 ">
      {nft?.url && <MediaRenderer src={nft.url} />}

      <div>
        <h2>{nft?.name}</h2>
        <p>{nft?.description}</p>
        <p className="font-bold">{nft?.price} ETH</p>
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
