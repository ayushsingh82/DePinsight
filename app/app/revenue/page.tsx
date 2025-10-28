export default function Revenue() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Revenue</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Revenue Statistics</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-600">Total Revenue</span>
            <span className="text-2xl font-bold text-green-600">$125,430</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-600">Monthly Revenue</span>
            <span className="text-xl font-semibold text-blue-600">$45,200</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-600">Growth</span>
            <span className="text-xl font-semibold text-green-600">+18.3%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Forecasted Q4</span>
            <span className="text-xl font-semibold text-purple-600">$165,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

