export default function Shares() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-4">Shares</h1>
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        <h2 className="text-xl font-semibold text-white mb-4">Share Activity</h2>
        <div className="space-y-4">
          <div className="bg-[#141414] border border-gray-700 p-4 hover:border-[#EBF73F] transition duration-150 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white">Facebook Shares</h3>
                <p className="text-sm text-gray-400">Most shared content</p>
              </div>
              <span className="text-2xl font-bold text-white">2.4K</span>
            </div>
          </div>
          <div className="bg-[#141414] border border-gray-700 p-4 hover:border-[#EBF73F] transition duration-150 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white">Twitter Shares</h3>
                <p className="text-sm text-gray-400">Highly engaged audience</p>
              </div>
              <span className="text-2xl font-bold text-white">1.8K</span>
            </div>
          </div>
          <div className="bg-[#141414] border border-gray-700 p-4 hover:border-[#EBF73F] transition duration-150 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white">LinkedIn Shares</h3>
                <p className="text-sm text-gray-400">Professional network</p>
              </div>
              <span className="text-2xl font-bold text-white">3.1K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

