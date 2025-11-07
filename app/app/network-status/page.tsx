"use client";

import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const nodeStatusData = [
  { time: "00:00", active: 1202, total: 5300 },
  { time: "04:00", active: 1198, total: 5300 },
  { time: "08:00", active: 1205, total: 5300 },
  { time: "12:00", active: 1210, total: 5300 },
  { time: "16:00", active: 1208, total: 5300 },
  { time: "20:00", active: 1202, total: 5300 },
];

const providerStatusData = [
  { day: "Mon", online: 1020, total: 1025 },
  { day: "Tue", online: 1022, total: 1025 },
  { day: "Wed", online: 1018, total: 1025 },
  { day: "Thu", online: 1023, total: 1025 },
  { day: "Fri", online: 1021, total: 1025 },
  { day: "Sat", online: 1024, total: 1025 },
  { day: "Sun", online: 1022, total: 1025 },
];

export default function NetworkStatus() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Network Status</h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="text-sm text-green-400">All Systems Operational</div>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-400">Network Uptime</div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">99.8%</div>
          <div className="text-xs text-gray-400">Last 30 days</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-400">Active Providers</div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">1,022</div>
          <div className="text-xs text-gray-400">of 1,025 total</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-400">Active Nodes</div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">1,202</div>
          <div className="text-xs text-gray-400">of 5,300 total</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-400">Avg. Latency</div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">44ms</div>
          <div className="text-xs text-gray-400">Global average</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Node Status Chart */}
        <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <h2 className="text-xl font-semibold text-white mb-6">Node Status (24h)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={nodeStatusData}>
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
              <Area 
                type="monotone" 
                dataKey="active" 
                stroke="#EBF73F" 
                fill="#EBF73F" 
                fillOpacity={0.3}
                name="Active Nodes"
              />
              <Line 
                type="monotone" 
                dataKey="total" 
                stroke="#9CA3AF" 
                strokeDasharray="5 5"
                name="Total Nodes"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Provider Status Chart */}
        <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <h2 className="text-xl font-semibold text-white mb-6">Provider Status (7 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={providerStatusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#1F2937", 
                  border: "1px solid #374151",
                  borderRadius: "8px"
                }}
              />
              <Area 
                type="monotone" 
                dataKey="online" 
                stroke="#4ADE80" 
                fill="#4ADE80" 
                fillOpacity={0.3}
                name="Online Providers"
              />
              <Line 
                type="monotone" 
                dataKey="total" 
                stroke="#9CA3AF" 
                strokeDasharray="5 5"
                name="Total Providers"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* System Health */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        <h2 className="text-xl font-semibold text-white mb-6">System Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black rounded border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">Compute Services</div>
                  <div className="text-xs text-gray-400">All regions operational</div>
                </div>
              </div>
              <div className="text-green-400 font-semibold">100%</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-black rounded border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">Storage Services</div>
                  <div className="text-xs text-gray-400">All regions operational</div>
                </div>
              </div>
              <div className="text-green-400 font-semibold">100%</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-black rounded border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">API Gateway</div>
                  <div className="text-xs text-gray-400">All endpoints responding</div>
                </div>
              </div>
              <div className="text-green-400 font-semibold">100%</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black rounded border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">Blockchain RPC</div>
                  <div className="text-xs text-gray-400">All chains synced</div>
                </div>
              </div>
              <div className="text-green-400 font-semibold">100%</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-black rounded border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">Monitoring Services</div>
                  <div className="text-xs text-gray-400">All metrics reporting</div>
                </div>
              </div>
              <div className="text-green-400 font-semibold">100%</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-black rounded border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">Payment Gateway</div>
                  <div className="text-xs text-gray-400">All transactions processing</div>
                </div>
              </div>
              <div className="text-green-400 font-semibold">100%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        <h2 className="text-xl font-semibold text-white mb-6">Recent Status Updates</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-black rounded border border-gray-800">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="text-white font-medium mb-1">All systems operational</div>
              <div className="text-xs text-gray-400 mb-2">Network uptime at 99.8% with all services running normally.</div>
              <div className="text-xs text-gray-500">2 hours ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-black rounded border border-gray-800">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="text-white font-medium mb-1">Performance optimization deployed</div>
              <div className="text-xs text-gray-400 mb-2">Updated compute nodes with improved latency (avg: 44ms).</div>
              <div className="text-xs text-gray-500">1 day ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-black rounded border border-gray-800">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="text-white font-medium mb-1">New provider region added</div>
              <div className="text-xs text-gray-400 mb-2">Expanded network coverage with 25 new providers in Asia-Pacific region.</div>
              <div className="text-xs text-gray-500">3 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

