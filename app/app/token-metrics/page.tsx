export default function TokenMetrics() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">NodeOps</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="text-white font-semibold">NODE #1280</span>
            <span>12K Holders</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold text-white">$0.05</div>
          <div className="flex items-center gap-2 text-red-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">-6.37%</span>
          </div>
        </div>
      </div>

      {/* Price Overview */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 mb-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        
        <h2 className="text-xl font-semibold text-white mb-6">Price Overview</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
              <span className="text-gray-400">Current Price</span>
              <span className="text-2xl font-bold text-white">$0.05166</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
              <span className="text-gray-400">24h Change</span>
              <span className="text-xl font-semibold text-red-500">-6.37%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">1Y Change</span>
              <span className="text-xl font-semibold text-green-500">+44.41%</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
              <span className="text-gray-400">Network Status</span>
              <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded text-sm font-semibold">Inactive</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
              <span className="text-gray-400">Category</span>
              <span className="text-white font-semibold">COMPUTE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total Holders</span>
              <span className="text-xl font-semibold text-white">67.75K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Data */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 mb-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        
        <h2 className="text-xl font-semibold text-white mb-6">Market Data</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex justify-between items-start pb-4 border-b border-gray-800">
            <div>
              <span className="text-gray-400 text-sm block mb-1">Market Cap</span>
              <span className="text-2xl font-bold text-white">$6.89M</span>
            </div>
            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded text-sm font-semibold">+4.06%</span>
          </div>
          <div className="flex justify-between items-start pb-4 border-b border-gray-800">
            <div>
              <span className="text-gray-400 text-sm block mb-1">24h Volume</span>
              <span className="text-2xl font-bold text-white">$5.59M</span>
            </div>
            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded text-sm font-semibold">+29.47%</span>
          </div>
          <div className="flex justify-between items-start pb-4 border-b border-gray-800">
            <div>
              <span className="text-gray-400 text-sm block mb-1">FDV</span>
              <span className="text-2xl font-bold text-white">$51.66M</span>
            </div>
            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded text-sm font-semibold">+4.06%</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Vol/Mkt Cap (24h)</span>
            <span className="text-xl font-semibold text-white">79.88%</span>
          </div>
        </div>
      </div>

      {/* Supply Data */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        
        <h2 className="text-xl font-semibold text-white mb-6">Token Supply</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <span className="text-gray-400">Circulating Supply</span>
            <span className="text-xl font-semibold text-white">133.39M</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <span className="text-gray-400">Total Supply</span>
            <span className="text-xl font-semibold text-white">658.46M</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <span className="text-gray-400">Max Supply</span>
            <span className="text-xl font-semibold text-white">1B NODE</span>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="mt-6 bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        
        <h2 className="text-xl font-semibold text-white mb-4">About</h2>
        <p className="text-gray-400 leading-relaxed">
          NodeOps provides AI Enabled simplified infrastructure specifically curated for Node Operators, 
          and developers and designed to simplify the development process and operations for Web3 protocols.
        </p>
      </div>
    </div>
  );
}

