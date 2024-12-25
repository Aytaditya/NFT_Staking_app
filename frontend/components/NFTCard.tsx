import { client } from "@/app/client"
import { useState } from "react"
import { NFT } from "thirdweb"
import { MediaRenderer } from "thirdweb/react"

type ownedNFTsProps={
    nft:NFT,
    refetchOwnedNFTs:()=>void,
    refetchStakedInfo:()=>void
}

const NFTCard = ({nft,refetchOwnedNFTs,refetchStakedInfo}:ownedNFTsProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isApproved, setIsApproved] = useState(false)
  return (
    <div className="">
      <MediaRenderer client={client} src={nft?.metadata?.image} className=" h-[250px] w-[250px]" style={{height:"300px",width:"300px"}}/>
      <p className="flex justify-center mt-2 font-bold">{nft?.metadata?.name}</p>

    </div>
  )
}

export default NFTCard
