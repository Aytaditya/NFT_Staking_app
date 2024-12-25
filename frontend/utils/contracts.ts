import { chain } from "@/app/chain"
import { client } from "@/app/client"
import { getContract } from "thirdweb"

const nftContractAddress="0x8d24D20cb3b2534EdA96BA3dDcf93f4aE9340f39" // Staking NFT contract address
const rewardTokenContractAddress="0x0099b47722CAf4ed3ddb40bdd9962C69B9f4E9C6" // Reward token contract address
const stakingContractAddress="0xaA39C9511c75ED26d8eB9DfEC2845aFfDfbB7f49" //staking contract address

export const NFT_CONTRACT=getContract({
    client:client,
    chain:chain,
    address:nftContractAddress
})

export const REWARD_TOKEN_CONTRACT=getContract({
    client:client,
    chain:chain,
    address:rewardTokenContractAddress
})

export const STAKING_CONTRACT=getContract({
    client:client,
    chain:chain,
    address:stakingContractAddress
})