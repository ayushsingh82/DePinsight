"use client";

import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from "recharts";

const monthlyRevenueData = [
  { month: "Jan", revenue: 110204, fees: 110204, earnings: 110204 },
  { month: "Feb", revenue: 144683, fees: 144683, earnings: 144683 },
  { month: "Mar", revenue: 256615, fees: 256615, earnings: 256615 },
  { month: "Apr", revenue: 282142, fees: 282142, earnings: 282142 },
  { month: "May", revenue: 58764, fees: 58764, earnings: 58764 },
  { month: "Jul", revenue: 38954, fees: 38954, earnings: 38954 },
  { month: "Aug", revenue: 272984, fees: 272984, earnings: 272984 },
  { month: "Sep", revenue: 204633, fees: 204633, earnings: 204633 },
  { month: "Oct", revenue: 34893, fees: 34893, earnings: 34893 },
];

const quarterlyData = [
  { quarter: "Q1 2025", fees: 511502, revenue: 511502, earnings: 511502 },
  { quarter: "Q2 2025", fees: 340906, revenue: 340906, earnings: 340906 },
  { quarter: "Q3 2025", fees: 516571, revenue: 516571, earnings: 516571 },
  { quarter: "Q4 2025", fees: 34893, revenue: 34893, earnings: 34893 },
];

const revenueSources = [
  { name: "Product Subscriptions", value: 1800000, color: "#EBF73F" },
  { name: "Deployment Fees", value: 1456399, color: "#3B82F6" },
  { name: "NODE-to-Credits", value: 1200000, color: "#4ADE80" },
];

export default function Revenue() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Revenue Analytics</h1>
        <div className="text-sm text-gray-400">Updated: Real-time</div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-sm text-gray-400 mb-1">Total Revenue</div>
          <div className="text-3xl font-bold text-white mb-2">$4.46M</div>
          <div className="text-xs text-green-400">+18.3% growth</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-sm text-gray-400 mb-1">Monthly Revenue</div>
          <div className="text-3xl font-bold text-white mb-2">$34.9K</div>
          <div className="text-xs text-gray-400">Current month</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-sm text-gray-400 mb-1">Yearly Revenue</div>
          <div className="text-3xl font-bold text-white mb-2">$1.4M</div>
          <div className="text-xs text-green-400">2025 YTD</div>
        </div>

        <div className="bg-[#141414] border border-gray-700 p-6 hover:border-[#EBF73F] transition duration-150 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <div className="text-sm text-gray-400 mb-1">Avg. Monthly</div>
          <div className="text-3xl font-bold text-white mb-2">$155.6K</div>
          <div className="text-xs text-gray-400">9 months</div>
        </div>
      </div>

      {/* Monthly Revenue Chart */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        <h2 className="text-xl font-semibold text-white mb-6">Monthly Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={monthlyRevenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#1F2937", 
                border: "1px solid #374151",
                borderRadius: "8px"
              }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#EBF73F" 
              fill="#EBF73F" 
              fillOpacity={0.3}
              name="Revenue"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quarterly Comparison */}
        <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <h2 className="text-xl font-semibold text-white mb-6">Quarterly Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="quarter" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#1F2937", 
                  border: "1px solid #374151",
                  borderRadius: "8px"
                }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Legend />
              <Bar dataKey="fees" fill="#EBF73F" name="Fees" />
              <Bar dataKey="revenue" fill="#4ADE80" name="Revenue" />
              <Bar dataKey="earnings" fill="#3B82F6" name="Earnings" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Sources */}
        <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
          <h2 className="text-xl font-semibold text-white mb-6">Revenue Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueSources}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {revenueSources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#1F2937", 
                  border: "1px solid #374151",
                  borderRadius: "8px"
                }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
        <h2 className="text-xl font-semibold text-white mb-6">Revenue Breakdown</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <div>
              <div className="text-white font-medium">Product Subscriptions</div>
              <div className="text-xs text-gray-400">Monthly recurring revenue</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">$1.8M</div>
              <div className="text-xs text-gray-400">40.4% of total</div>
            </div>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <div>
              <div className="text-white font-medium">Deployment Fees</div>
              <div className="text-xs text-gray-400">One-time deployment charges</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">$1.46M</div>
              <div className="text-xs text-gray-400">32.7% of total</div>
            </div>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <div>
              <div className="text-white font-medium">NODE-to-Credits Conversion</div>
              <div className="text-xs text-gray-400">Automated token conversions</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">$1.2M</div>
              <div className="text-xs text-gray-400">26.9% of total</div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="text-white font-bold text-lg">Total Revenue</div>
            <div className="text-3xl font-bold text-[#EBF73F]">$4.46M</div>
          </div>
        </div>
      </div>
    </div>
  );
}
