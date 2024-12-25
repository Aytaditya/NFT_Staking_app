import Image from "next/image";
import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { client } from "./client";
import { chain } from "./chain";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-[500px] m-[20px] mx-auto">
      
      <h1>NFT Staking Application</h1>
      <ConnectButton client={client} chain={chain} />
    </div>
  );
}
