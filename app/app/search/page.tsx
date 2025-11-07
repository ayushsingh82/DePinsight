"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: "token" | "analytics" | "dune" | "revenue" | "network";
  href: string;
  tags: string[];
}

const searchData: SearchResult[] = [
  // Token Metrics
  { id: "1", title: "Token Price", description: "Real-time token price tracking, 24h/7d/1Y changes", category: "token", href: "/app/token-metrics", tags: ["price", "token", "NODE", "market"] },
  { id: "2", title: "Market Cap", description: "Current market capitalization and volume data", category: "token", href: "/app/token-metrics", tags: ["market cap", "volume", "FDV", "token"] },
  { id: "3", title: "Token Supply", description: "Circulating, total, and max supply information", category: "token", href: "/app/token-metrics", tags: ["supply", "circulating", "total supply", "burn"] },
  { id: "4", title: "Token Holders", description: "Total number of token holders and distribution", category: "token", href: "/app/token-metrics", tags: ["holders", "distribution", "token"] },
  
  // Analytics
  { id: "5", title: "Revenue Analytics", description: "Comprehensive revenue charts and trends", category: "analytics", href: "/app/analytics", tags: ["revenue", "charts", "trends", "analytics"] },
  { id: "6", title: "Token Price Chart", description: "7-day token price visualization", category: "analytics", href: "/app/analytics", tags: ["price", "chart", "token", "7d"] },
  { id: "7", title: "Supply Distribution", description: "Token supply breakdown and distribution", category: "analytics", href: "/app/analytics", tags: ["supply", "distribution", "pie chart"] },
  { id: "8", title: "Deployment Trends", description: "Network deployment growth over time", category: "analytics", href: "/app/analytics", tags: ["deployments", "growth", "trends"] },
  
  // Dune
  { id: "9", title: "Total Revenue", description: "Cumulative revenue from all sources", category: "dune", href: "/app/dune", tags: ["revenue", "total", "dune"] },
  { id: "10", title: "CPU Cores", description: "Total CPU cores available in the network", category: "dune", href: "/app/dune", tags: ["CPU", "cores", "compute", "resources"] },
  { id: "11", title: "Storage (GB)", description: "Total storage capacity in gigabytes", category: "dune", href: "/app/dune", tags: ["storage", "GB", "capacity"] },
  { id: "12", title: "Memory (GB)", description: "Total memory capacity in gigabytes", category: "dune", href: "/app/dune", tags: ["memory", "RAM", "capacity"] },
  { id: "13", title: "Total Deployments", description: "Number of completed deployments", category: "dune", href: "/app/dune", tags: ["deployments", "total", "count"] },
  { id: "14", title: "Providers Onboarded", description: "Total number of providers in the network", category: "dune", href: "/app/dune", tags: ["providers", "onboarded", "network"] },
  { id: "15", title: "Active Machines", description: "Currently active machines in the network", category: "dune", href: "/app/dune", tags: ["machines", "active", "nodes"] },
  { id: "16", title: "Contract Addresses", description: "Smart contract addresses across chains", category: "dune", href: "/app/dune", tags: ["contracts", "addresses", "blockchain"] },
  
  // Revenue
  { id: "17", title: "Monthly Revenue", description: "Monthly revenue breakdown and trends", category: "revenue", href: "/app/revenue", tags: ["revenue", "monthly", "trends"] },
  { id: "18", title: "Quarterly Revenue", description: "Quarterly revenue comparison", category: "revenue", href: "/app/revenue", tags: ["revenue", "quarterly", "comparison"] },
  { id: "19", title: "Revenue Sources", description: "Breakdown of revenue by source", category: "revenue", href: "/app/revenue", tags: ["revenue", "sources", "breakdown"] },
  
  // Network
  { id: "20", title: "Network Uptime", description: "Network availability and uptime statistics", category: "network", href: "/app/network-status", tags: ["uptime", "availability", "network"] },
  { id: "21", title: "Provider Status", description: "Current status of network providers", category: "network", href: "/app/network-status", tags: ["providers", "status", "health"] },
  { id: "22", title: "Node Status", description: "Active and total node statistics", category: "network", href: "/app/network-status", tags: ["nodes", "status", "active"] },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredResults = useMemo(() => {
    let results = searchData;

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter(result => result.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(result => {
        return (
          result.title.toLowerCase().includes(query) ||
          result.description.toLowerCase().includes(query) ||
          result.tags.some(tag => tag.toLowerCase().includes(query))
        );
      });
    }

    return results;
  }, [searchQuery, selectedCategory]);

  const categories = [
    { value: "all", label: "All" },
    { value: "token", label: "Token Metrics" },
    { value: "analytics", label: "Analytics" },
    { value: "dune", label: "Dune" },
    { value: "revenue", label: "Revenue" },
    { value: "network", label: "Network" },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      token: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      analytics: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      dune: "bg-green-500/20 text-green-400 border-green-500/30",
      revenue: "bg-[#EBF73F]/20 text-[#EBF73F] border-[#EBF73F]/30",
      network: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Search</h1>
      </div>

      {/* Search Bar */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search for tokens, metrics, revenue, deployments..."
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
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded text-sm font-medium transition duration-150 ${
                selectedCategory === category.value
                  ? "bg-[#EBF73F] text-black"
                  : "bg-black border border-gray-700 text-white hover:border-[#EBF73F]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            {filteredResults.length} {filteredResults.length === 1 ? "result" : "results"}
            {searchQuery && ` for "${searchQuery}"`}
          </h2>
        </div>

        {filteredResults.length === 0 ? (
          <div className="bg-[#141414] border border-gray-800 shadow-md p-12 relative text-center">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
            <div className="text-gray-400 text-lg">No results found</div>
            <div className="text-gray-500 text-sm mt-2">Try a different search term or category</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredResults.map((result) => (
              <Link
                key={result.id}
                href={result.href}
                className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative group"
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F] opacity-0 group-hover:opacity-100 transition duration-150"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F] opacity-0 group-hover:opacity-100 transition duration-150"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F] opacity-0 group-hover:opacity-100 transition duration-150"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F] opacity-0 group-hover:opacity-100 transition duration-150"></div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#EBF73F] transition duration-150">
                    {result.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(result.category)}`}>
                    {result.category}
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">{result.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {result.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-black border border-gray-800 rounded text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

