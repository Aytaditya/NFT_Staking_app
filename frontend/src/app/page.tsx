import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { chain } from "./chain";
import Staking from "../../components/Staking";
import { Search, Plus, ChevronDown,Award} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <nav className="border-b border-white/10">
        <div className="px-4 mx-auto">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-bold text-purple-400 flex">
                  <h1>StakeSphere </h1>
                  <Award size={30} className="mt-1"/>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/5 rounded-md">
                <span>Your Dashboard</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="ml-auto">
              <ConnectButton client={client} chain={chain} />
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="border-b border-white/10">
        <div className="px-4 mx-auto">
          <div className="flex space-x-8">
            <button className="px-3 py-4 text-sm text-white border-b-2 border-purple-500">Overview</button>
            <button className="px-3 py-4 text-sm text-gray-400 hover:text-white">Analytics</button>
            <button className="px-3 py-4 text-sm text-gray-400 hover:text-white">Settings</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Welcome to StakeSphere</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or ID"
                  className="w-[300px] pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg text-black font-medium hover:bg-gray-100 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add New</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
            <Staking />
            
            {/* Latest Changes */}
            <div className="bg-white/5 rounded-lg p-6 h-fit">
              <h2 className="text-lg font-semibold mb-4">Latest Changes</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">New NFT Staked by user</p>
                    <p className="text-xs text-gray-400">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Rewards Claimed by 0xcCBB...B689</p>
                    <p className="text-xs text-gray-400">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

