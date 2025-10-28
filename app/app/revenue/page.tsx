export default function Revenue() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-4">Revenue</h1>
      <div className="bg-[#141414] border border-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Revenue Statistics</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <span className="text-gray-400">Total Revenue</span>
            <span className="text-2xl font-bold text-white">$125,430</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <span className="text-gray-400">Monthly Revenue</span>
            <span className="text-xl font-semibold text-white">$45,200</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <span className="text-gray-400">Growth</span>
            <span className="text-xl font-semibold text-white">+18.3%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Forecasted Q4</span>
            <span className="text-xl font-semibold text-white">$165,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

