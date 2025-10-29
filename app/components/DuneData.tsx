"use client";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
  username?: string;
  timestamp?: string;
}

function MetricCard({ title, value, description, username, timestamp }: MetricCardProps) {
  return (
    <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
      <div className="text-sm text-gray-400 mb-2">{title}</div>
      <div className="text-3xl font-bold text-white mb-3">{value}</div>
      {description && (
        <div className="text-xs text-gray-500 mb-2">
          {description}
        </div>
      )}
      {username && (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-800">
          <span className="text-xs text-gray-500">@{username}</span>
          {timestamp && (
            <span className="text-xs text-gray-600">{timestamp}</span>
          )}
        </div>
      )}
    </div>
  );
}

interface ContractAddressProps {
  label: string;
  address: string;
  chain?: "arbitrum" | "ethereum" | "bsc" | null;
  isToken?: boolean;
}

function ContractAddress({ label, address, chain, isToken = false }: ContractAddressProps) {
  const getExplorerUrl = () => {
    if (!chain) return null;
    
    const endpoint = isToken ? "token" : "address";
    
    if (chain === "arbitrum") {
      return `https://arbiscan.io/${endpoint}/${address}`;
    } else if (chain === "ethereum") {
      return `https://etherscan.io/${endpoint}/${address}`;
    } else if (chain === "bsc") {
      return `https://bscscan.com/${endpoint}/${address}`;
    }
    return null;
  };

  const explorerUrl = getExplorerUrl();
  const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="bg-[#141414] border border-gray-700 p-4 hover:border-[#EBF73F] transition duration-150 relative group">
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
      <div className="text-sm text-gray-400 mb-2">{label}</div>
      <div className="flex items-center gap-2">
        {explorerUrl ? (
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#EBF73F] transition-colors duration-150"
          >
            <span className="font-mono">{shortAddress}</span>
            <span className="text-lg">🔗</span>
          </a>
        ) : (
          <span className="text-sm text-gray-500 font-mono">{shortAddress}</span>
        )}
      </div>
    </div>
  );
}

export default function DuneData() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-6">Dune Analytics</h1>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$4,456,399"
          username="nodeops"
          timestamp="18h"
        />
        
        <MetricCard
          title="CPU (In Cores)"
          value="1,537"
          username="nodeops"
          timestamp="18h"
        />
        
        <MetricCard
          title="Circulating Supply (NODE)"
          value="133,390,828"
          description="The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments)."
          username="nodeops"
          timestamp="18h"
        />
        
        <MetricCard
          title="Total NODE Supply - At Genesis"
          value="658,468,718"
          description="The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market. Total Supply = Onchain supply - burned tokens"
          username="nodeops"
          timestamp="18h"
        />
        
        <MetricCard
          title="NODE Burnt"
          value="20,365,012"
          description="The total amount of coins that have been permanently removed from circulation by sending them to an irretrievable address (e.g., burn address or zero address). It represents the supply that can no longer enter circulation."
          username="nodeops"
          timestamp="18h"
        />
      </div>

      {/* Project Overview Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
        
        <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative mb-6">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <h3 className="text-xl font-semibold text-white mb-6">NodeOps Network Protocol Addresses</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContractAddress
              label="Revenue Contract"
              address="0xC02ADd3D60aF95Bd7652D68c7D510F0d52f994Ef"
              chain="arbitrum"
            />
            <ContractAddress
              label="IDO Contract"
              address="0x746038a17EBbB4298F0946cade01D80c09858240"
              chain="ethereum"
            />
            <ContractAddress
              label="Initial Contributor Contract"
              address="0xC9B1CBBA254a05ff0d2C0E9155CDC08fFbcE8125"
              chain="ethereum"
            />
            <ContractAddress
              label="Early Backers Contract"
              address="0x750aDCAE75DAd6430c15F09C17391317Ef9BE278"
              chain="ethereum"
            />
            <ContractAddress
              label="NodeOps Protocol Incentives Contract"
              address="0xaBAC7E8F0A513F0D07ee9b3df9a5d6fD7d4D61A8"
              chain="ethereum"
            />
            <ContractAddress
              label="Ecosystem + Community Contract"
              address="0x7269b91EEdF66249cc695A221115eFF3D1aaA67C"
              chain="ethereum"
            />
            <ContractAddress
              label="Airdrop Contract"
              address="0x8Bde34f361404dFe3c127b328864087058a2622f"
              chain="ethereum"
            />
            <ContractAddress
              label="Incentives Vesting Contract"
              address="0x1BCe1330E93D08f2996fDaEd23a9168B9e3ed090"
              chain="ethereum"
            />
            <ContractAddress
              label="Ecosystem Vesting Contract"
              address="0xcDfC2Cc484E5Cf5669d34BA44260C83c4279f7B2"
              chain="ethereum"
            />
            <ContractAddress
              label="Airdrop Vesting Contract"
              address="0x2F714d7b9A035d4ce24af8d9b6091c07E37f43Fb"
              chain="ethereum"
            />
            <ContractAddress
              label="Burn Address"
              address="0x2080FeE444118AFCe30fCb749802C18c0a980dB7"
              chain="ethereum"
            />
          </div>
        </div>

        <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <h3 className="text-xl font-semibold text-white mb-6">$NODE Token Contract Address</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ContractAddress
              label="Arbitrum"
              address="0x2F714d7b9A035d4ce24af8d9b6091c07E37f43Fb"
              chain="arbitrum"
            />
            <ContractAddress
              label="Ethereum"
              address="0x2F714d7b9A035d4ce24af8d9b6091c07E37f43Fb"
              chain="ethereum"
            />
            <ContractAddress
              label="Binance Smart Chain"
              address="0x2F714d7b9A035d4ce24af8d9b6091c07E37f43Fb"
              chain="bsc"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

