'use client'

import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react"
import { CuboidIcon as Cube } from 'lucide-react'
import { claimTo, getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721"
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts"
import { useState } from "react"
import { NFT } from "thirdweb"
import { useEffect } from "react"
import NFTCard from "./NFTCard"

const Staking = () => {
  const account = useActiveAccount()

  const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([])

  const getOwnedNFTs = async () => {
    let ownedNFTs:NFT[] = []
    
    const totalNftSupply = await totalSupply({
        contract:NFT_CONTRACT
    })

    const nfts=await getNFTs({
        contract:NFT_CONTRACT,
        start:0,
        count:parseInt(totalNftSupply.toString())
    })
    
    for (let nft of nfts) {
        const owner = await ownerOf({
            contract: NFT_CONTRACT,
            tokenId: nft.id,
        });
        if (owner === account?.address) {
            ownedNFTs.push(nft);
        }
    }
    setOwnedNFTs(ownedNFTs);
  }
  
  useEffect(() => {
    if(account) {
        getOwnedNFTs();
    }
}, [account]);

const {
    data:stakedInfo,
    refetch:refetchStakedInfo,
}=useReadContract({
    contract:STAKING_CONTRACT,
    method:"getStakeInfo",
    params:[account?.address || ""]
})

  if (account) {
    return (
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <div className="max-w-md flex justify-between ">
            <h1 className="text-3xl  tracking-tighter">Claim NFT to Stake</h1>
              <TransactionButton 
              onTransactionConfirmed={()=>alert("NFT Claimed")}
              transaction={()=>
                claimTo({
                  contract:NFT_CONTRACT,
                  to:account?.address || "",
                  quantity:BigInt(1),

                }) 
                
              }>
                  Claim NFT
              </TransactionButton>
        </div>
            
        <div className="mt-2">
    <h1 className="text-xl flex justify-center mb-3 mt-12 font-semibold">Owned NFTs</h1>
        <div className="mt-12 flex flex-row flex-wrap gap-4">
        {ownedNFTs && ownedNFTs.length > 0 ? (
            ownedNFTs.map((nft, index) => (
                <div key={index} className="p-4  rounded-lg shadow-md">
                    <NFTCard
                        nft={nft}
                        refetchOwnedNFTs={getOwnedNFTs}
                        refetchStakedInfo={refetchStakedInfo}
                    />
                </div>
            ))
        ) : (
            <p className="text-gray-500">Mint some NFTs, you don’t own any right now.</p>
        )}
    </div>
      </div>
      </div>
    )
  }

  return (
    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-4">Welcome to NFT Staking</h2>
        <p className="text-gray-400 mb-6">
          Connect your wallet to start staking your NFTs and earning rewards. Track your staked assets and manage your earnings all in one place.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <Cube className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-sm text-gray-300">Stake your NFTs securely</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <Cube className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-sm text-gray-300">Earn rewards automatically</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <Cube className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-sm text-gray-300">Track your earnings in real-time</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staking

