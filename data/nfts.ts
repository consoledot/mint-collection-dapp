import { NFT } from "../types/nft";
import { storageLink } from "../utils/constant";
export const nfts: NFT[] = [
  {
    id: 0,
    name: "NFT 1",
    description: "This is our first NFT",
    url: storageLink(
      "bafkreibkl7qq72j3tlamzycppst6kchzm5lclctwtnjhq5hlizaq2j33mi"
    ),
    price: 0.001,
  },
  {
    id: 1,
    name: "NFT 2",
    description: "This is our second NFT",
    url: storageLink(
      "bafkreia3k5r4ekbbstbv32at57jcsch4qkht4l4vbcmajb5llw3dxuzpp4"
    ),
    price: 0.002,
  },
  {
    id: 2,
    name: "NFT 3",
    description: "This is our third NFT",
    url: storageLink(
      "bafkreigxndxvnpjewnqx4r3q5xu3lygfhv5k62dturzcwqsgz7mv7jwa2a"
    ),
    price: 0.001,
  },
  {
    id: 3,
    name: "NFT 4",
    description: "This is our forth NFT",
    url: storageLink(
      "bafkreiavn2frnpkmrgk4e563223uqriwaot27u2rlr7obpiemjzvvoffzq"
    ),
    price: 0.03,
  },
  {
    id: 4,
    name: "NFT 5",
    description: "This is our fifth NFT",
    url: storageLink(
      "bafkreicfkk6ilbjykk4mvn7obfwxclubztppjbjwpafxws4x52mu65pipq"
    ),
    price: 0.001,
  },
  {
    id: 5,
    name: "NFT 6",
    description: "This is our sixth NFT",
    url: storageLink(
      "bafkreidxuv277qpkmmmaw5fiye7wvygne2eaaqfl6kh54kfwev7umdedce"
    ),
    price: 0.001,
  },
];
