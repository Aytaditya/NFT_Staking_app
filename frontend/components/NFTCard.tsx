import { client } from "@/app/client";
import { useState } from "react";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer, TransactionButton } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { approve } from "thirdweb/extensions/erc721";
import { Cross, Minimize2 } from "lucide-react";

type OwnedNFTsProps = {
  nft: NFT,
  refetch: () => void,
  refetchStakedInfo: () => void
};

const NFTCard = ({ nft, refetch, refetchStakedInfo }: OwnedNFTsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md">
      <MediaRenderer
        client={client}
        src={nft?.metadata?.image}
        className="h-64 w-64 object-cover mb-2"
        style={{ height: '300px', width: '100%' }}
      />
      <p className="nft-name">{nft?.metadata?.name}</p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn bg-white text-black rounded-md w-md"
      >
        Stake NFT
      </button>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              minWidth: "300px",
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                <Minimize2 size={20} />
              </button>
            </div>
            <h3 style={{ margin: "10px 0" }} className="text-2xl mb-3 font-semibold">You are about to stake:</h3>
            <MediaRenderer
              client={client}
              src={nft.metadata.image}
              style={{
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            {!isApproved ? (
              <TransactionButton
                transaction={() =>
                  approve({
                    contract: NFT_CONTRACT,
                    to: STAKING_CONTRACT.address,
                    tokenId: nft.id,
                  })
                }
                style={{ width: "100%" }}
                onTransactionConfirmed={() => setIsApproved(true)}
              >
                Approve
              </TransactionButton>
            ) : (
              <TransactionButton
                transaction={() =>
                  prepareContractCall({
                    contract: STAKING_CONTRACT,
                    method: "stake",
                    params: [[nft.id]],
                  })
                }
                onTransactionConfirmed={() => {
                  alert("Staked!");
                  setIsModalOpen(false);
                  refetch();
                  refetchStakedInfo();
                }}
                style={{ width: "100%" }}
              >
                Stake
              </TransactionButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTCard;
