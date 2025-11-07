"use client";

import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const networkHealthData = [
  { day: "Mon", uptime: 99.8, latency: 45 },
  { day: "Tue", uptime: 99.9, latency: 42 },
  { day: "Wed", uptime: 99.7, latency: 48 },
  { day: "Thu", uptime: 99.9, latency: 41 },
  { day: "Fri", uptime: 99.8, latency: 44 },
  { day: "Sat", uptime: 99.9, latency: 43 },
  { day: "Sun", uptime: 99.8, latency: 46 },
];

const deploymentActivity = [
  { time: "00:00", deployments: 12 },
  { time: "04:00", deployments: 8 },
  { time: "08:00", deployments: 45 },
  { time: "12:00", deployments: 67 },
  { time: "16:00", deployments: 89 },
  { time: "20:00", deployments: 52 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="text-sm text-gray-400">Last updated: 2 minutes ago</div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-sm text-gray-400 mb-1">Total Revenue</div>
          <div className="text-3xl font-bold text-white mb-2">$4.46M</div>
          <div className="text-xs text-green-400">+12.5% from last month</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-sm text-gray-400 mb-1">Active Providers</div>
          <div className="text-3xl font-bold text-white mb-2">1,025</div>
          <div className="text-xs text-green-400">+5.2% from last week</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-sm text-gray-400 mb-1">Total Deployments</div>
          <div className="text-3xl font-bold text-white mb-2">24,242</div>
          <div className="text-xs text-green-400">+18.3% from last month</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-sm text-gray-400 mb-1">Network Uptime</div>
          <div className="text-3xl font-bold text-white mb-2">99.8%</div>
          <div className="text-xs text-green-400">Excellent</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Network Health */}
        <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <h2 className="text-xl font-semibold text-white mb-6">Network Health (7 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={networkHealthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis yAxisId="left" stroke="#9CA3AF" domain={[99, 100]} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#1F2937", 
                  border: "1px solid #374151",
                  borderRadius: "8px"
                }}
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="uptime" 
                stroke="#EBF73F" 
                fill="#EBF73F" 
                fillOpacity={0.2}
                name="Uptime %"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="latency" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Latency (ms)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Deployment Activity */}
        <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <h2 className="text-xl font-semibold text-white mb-6">Deployment Activity (24h)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deploymentActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#1F2937", 
                  border: "1px solid #374151",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="deployments" fill="#EBF73F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resource Utilization */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        <h2 className="text-xl font-semibold text-white mb-6">Resource Utilization</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">CPU Cores</span>
              <span className="text-white font-semibold">1,537</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-[#EBF73F] h-2 rounded-full" style={{ width: "68%" }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">68% utilized</div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Memory (GB)</span>
              <span className="text-white font-semibold">3,607</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-[#3B82F6] h-2 rounded-full" style={{ width: "52%" }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">52% utilized</div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Storage (GB)</span>
              <span className="text-white font-semibold">59,773</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-[#4ADE80] h-2 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">45% utilized</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        <h2 className="text-xl font-semibold text-white mb-6">Recent Network Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div>
                <div className="text-white font-medium">New provider onboarded</div>
                <div className="text-xs text-gray-400">Provider ID: #1025</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">2 minutes ago</div>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div>
                <div className="text-white font-medium">Deployment completed</div>
                <div className="text-xs text-gray-400">Deployment ID: #24242</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">15 minutes ago</div>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#EBF73F] rounded-full"></div>
              <div>
                <div className="text-white font-medium">Revenue milestone reached</div>
                <div className="text-xs text-gray-400">$4.46M total revenue</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">1 hour ago</div>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div>
                <div className="text-white font-medium">Token burn executed</div>
                <div className="text-xs text-gray-400">20.37M NODE tokens burnt</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">2 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
