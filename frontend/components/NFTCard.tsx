import { client } from "@/app/client";
import { useState } from "react";
import { NFT } from "thirdweb";
import { MediaRenderer } from "thirdweb/react";

type OwnedNFTsProps = {
  nft: NFT,
  refetchOwnedNFTs: () => void,
  refetchStakedInfo: () => void
};

const NFTCard = ({ nft, refetchOwnedNFTs, refetchStakedInfo }: OwnedNFTsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md">
      <MediaRenderer 
        client={client} 
        src={nft?.metadata?.image} 
        className="h-64 w-64 object-cover mb-2"
        style={{height: '256px', width: '256px'}} 
      />
      <p className="nft-name">{nft?.metadata?.name}</p>
    </div>
  );
};

export default NFTCard;