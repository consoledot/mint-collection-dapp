import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { network } from "../utils/constant";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={network}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
