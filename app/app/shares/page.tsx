export default function Shares() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Shares</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Share Activity</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">Facebook Shares</h3>
                <p className="text-sm text-gray-600">Most shared content</p>
              </div>
              <span className="text-2xl font-bold text-blue-600">2.4K</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">Twitter Shares</h3>
                <p className="text-sm text-gray-600">Highly engaged audience</p>
              </div>
              <span className="text-2xl font-bold text-sky-600">1.8K</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">LinkedIn Shares</h3>
                <p className="text-sm text-gray-600">Professional network</p>
              </div>
              <span className="text-2xl font-bold text-indigo-600">3.1K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

