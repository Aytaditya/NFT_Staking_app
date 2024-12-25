'use client'

import { useActiveAccount } from "thirdweb/react"
import { CuboidIcon as Cube } from 'lucide-react'

const Staking = () => {
  const account = useActiveAccount()

  if (account) {
    return (
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus nisi culpa laborum excepturi cum eius blanditiis minima odio dolore placeat quis, eveniet accusantium deserunt velit exercitationem dignissimos, laudantium consequuntur. Repellat quod saepe temporibus dolore distinctio impedit, fuga explicabo consequuntur. Impedit nulla neque doloribus ipsa iste dignissimos, sunt ea quibusdam porro atque beatae placeat soluta quos, natus fuga unde deleniti laboriosam quo. Quos dolore voluptatibus sequi minus suscipit asperiores ea, consectetur magni eveniet? Incidunt quos delectus quibusdam tempora, quasi quaerat recusandae non quae qui porro sed consequatur iure dicta praesentium deleniti distinctio iusto, dolorum blanditiis placeat voluptatum perferendis asperiores consequuntur nostrum neque. Itaque molestias quas placeat? Facilis, ex veniam? Eius cumque quaerat minus dolores dolor quia esse soluta, ipsa illo quos tempore impedit fugit placeat similique blanditiis dolorum tempora distinctio optio debitis voluptatem dolore itaque quisquam repellat? Fuga laudantium dolore, officiis ex cupiditate explicabo quasi eveniet quae magnam velit aliquid non reprehenderit praesentium tempora sint quis labore cumque corporis numquam ipsam. Non, quisquam libero dolorem reiciendis dolore aut in sunt ad, vero odit dolores praesentium ipsum tempore rerum animi consequuntur soluta delectus assumenda quos modi eveniet perspiciatis asperiores. Veniam tempora non quia cupiditate unde necessitatibus. Vel accusamus distinctio autem numquam, voluptatum libero mollitia commodi porro aliquid beatae accusantium eligendi nobis sed? Atque ea voluptatum at aliquam necessitatibus mollitia perspiciatis pariatur explicabo distinctio fugit repudiandae perferendis, eius quos modi! Molestiae nulla, distinctio laboriosam facilis perferendis tempora doloremque quod alias qui eaque est minima aperiam magnam animi ipsam sit expedita iusto aliquid dicta esse repellat blanditiis nobis. Itaque quod quis eaque sapiente tempore assumenda quas eum velit! Quaerat, harum possimus aliquam rem, ducimus nemo non expedita, perferendis veniam magnam excepturi repudiandae necessitatibus corporis dolorem aspernatur! Eum quo animi expedita, harum dicta, mollitia distinctio assumenda odit fugiat, aperiam corrupti error tenetur perferendis natus?
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

