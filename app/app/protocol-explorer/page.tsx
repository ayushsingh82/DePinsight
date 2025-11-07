"use client";

import { useState } from "react";
import Link from "next/link";

interface Protocol {
  id: string;
  name: string;
  category: string;
  description: string;
  status: "active" | "inactive" | "maintenance";
  metrics: {
    revenue: string;
    users: string;
    tvl?: string;
  };
  chains: string[];
  tags: string[];
}

const protocols: Protocol[] = [
  {
    id: "nodeops",
    name: "NodeOps Network",
    category: "DePIN",
    description: "Decentralized infrastructure stack powering compute and AI workloads",
    status: "active",
    metrics: {
      revenue: "$4.46M",
      users: "1,025 providers",
      tvl: "$6.89M",
    },
    chains: ["Arbitrum", "Ethereum", "BSC"],
    tags: ["Compute", "AI", "Infrastructure", "DePIN"],
  },
  {
    id: "example1",
    name: "Example Protocol A",
    category: "DeFi",
    description: "Decentralized finance protocol for lending and borrowing",
    status: "active",
    metrics: {
      revenue: "$2.1M",
      users: "5,234 users",
      tvl: "$45.2M",
    },
    chains: ["Ethereum", "Polygon"],
    tags: ["Lending", "Borrowing", "DeFi"],
  },
  {
    id: "example2",
    name: "Example Protocol B",
    category: "NFT",
    description: "NFT marketplace and trading platform",
    status: "active",
    metrics: {
      revenue: "$890K",
      users: "12,456 users",
    },
    chains: ["Ethereum", "Solana"],
    tags: ["NFT", "Marketplace", "Trading"],
  },
];

export default function ProtocolExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "DePIN", "DeFi", "NFT", "Gaming", "Social"];

  const filteredProtocols = protocols.filter((protocol) => {
    const matchesSearch =
      protocol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "all" || protocol.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: "bg-green-500/20 text-green-400 border-green-500/30",
      inactive: "bg-red-500/20 text-red-400 border-red-500/30",
      maintenance: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    };
    return colors[status] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Protocol Explorer</h1>
      </div>

      {/* Search and Filters */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search protocols..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black border border-gray-700 text-white px-4 py-3 pr-12 rounded focus:outline-none focus:border-[#EBF73F] transition duration-150"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded text-sm font-medium transition duration-150 ${
                selectedCategory === category
                  ? "bg-[#EBF73F] text-black"
                  : "bg-black border border-gray-700 text-white hover:border-[#EBF73F]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Protocols Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProtocols.map((protocol) => (
          <div
            key={protocol.id}
            className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative group"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F] opacity-0 group-hover:opacity-100 transition duration-150"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F] opacity-0 group-hover:opacity-100 transition duration-150"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F] opacity-0 group-hover:opacity-100 transition duration-150"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F] opacity-0 group-hover:opacity-100 transition duration-150"></div>

            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-white group-hover:text-[#EBF73F] transition duration-150">
                {protocol.name}
              </h3>
              <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(protocol.status)}`}>
                {protocol.status}
              </span>
            </div>

            <div className="mb-3">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded text-xs font-medium">
                {protocol.category}
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-4">{protocol.description}</p>

            {/* Metrics */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Revenue</span>
                <span className="text-sm font-semibold text-white">{protocol.metrics.revenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Users</span>
                <span className="text-sm font-semibold text-white">{protocol.metrics.users}</span>
              </div>
              {protocol.metrics.tvl && (
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">TVL</span>
                  <span className="text-sm font-semibold text-white">{protocol.metrics.tvl}</span>
                </div>
              )}
            </div>

            {/* Chains */}
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-2">Supported Chains</div>
              <div className="flex flex-wrap gap-2">
                {protocol.chains.map((chain, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-black border border-gray-800 rounded text-xs text-gray-400"
                  >
                    {chain}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {protocol.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-black border border-gray-800 rounded text-xs text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Details Link */}
            {protocol.id === "nodeops" && (
              <Link
                href="/app"
                className="block mt-4 text-center px-4 py-2 bg-[#EBF73F] text-black font-semibold rounded hover:bg-[#EBF73F]/80 transition duration-150"
              >
                View Details
              </Link>
            )}
          </div>
        ))}
      </div>

      {filteredProtocols.length === 0 && (
        <div className="bg-[#141414] border border-gray-800 shadow-md p-12 relative text-center">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-gray-400 text-lg">No protocols found</div>
          <div className="text-gray-500 text-sm mt-2">Try a different search term or category</div>
        </div>
      )}
    </div>
  );
}

