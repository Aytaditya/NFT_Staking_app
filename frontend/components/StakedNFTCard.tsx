import React from 'react'
import { getNFT } from 'thirdweb/extensions/erc721';
import { MediaRenderer, TransactionButton, useReadContract } from 'thirdweb/react';
import { NFT_CONTRACT, STAKING_CONTRACT } from '../utils/contracts';
import { client } from '@/app/client';
import { prepareContractCall } from 'thirdweb';


type StakedNFTCardProps = {
  tokenId: bigint;
  refetchStakedInfo: () => void;
  refetchOwnedNFTs: () => void;
};

const StakedNFTCard = ({tokenId,refetchStakedInfo,refetchOwnedNFTs}:StakedNFTCardProps) => {
  const { data: nft } = useReadContract(
    getNFT,
    {
        contract: NFT_CONTRACT,
        tokenId: tokenId,
    }
);
  return (
    <div className='flex flex-col p-4 rounded-lg shadow-md'>
      <MediaRenderer
      client={client}
      src={nft?.metadata?.image}
      className="h-64 w-64 object-cover mb-2"
        style={{ height: '300px', width: '100%' }}
      />
      <p className="nft-name">{nft?.metadata?.name}</p>
      <TransactionButton transaction={() => (
                    prepareContractCall({
                        contract: STAKING_CONTRACT,
                        method: "withdraw",
                        params: [[tokenId]]
                    })
                )}
                onTransactionConfirmed={() => {
                    refetchOwnedNFTs();
                    refetchStakedInfo();
                    alert("Withdrawn!");
                }}>
            Withdraw NFT
        </TransactionButton>
    </div>
  )
}

export default StakedNFTCard
