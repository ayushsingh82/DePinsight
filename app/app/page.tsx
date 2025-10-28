export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#141414] border border-gray-700 p-4 hover:border-[#EBF73F] transition duration-150 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
            <div className="text-sm text-gray-400">Total Users</div>
            <div className="text-2xl font-bold text-white">1,234</div>
          </div>
          <div className="bg-[#141414] border border-gray-700 p-4 hover:border-[#EBF73F] transition duration-150 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
            <div className="text-sm text-gray-400">Active Sessions</div>
            <div className="text-2xl font-bold text-white">567</div>
          </div>
          <div className="bg-[#141414] border border-gray-700 p-4 hover:border-[#EBF73F] transition duration-150 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
            <div className="text-sm text-gray-400">Growth Rate</div>
            <div className="text-2xl font-bold text-white">+12.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

