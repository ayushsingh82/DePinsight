"use client";

import { useState } from "react";
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

const COLORS = ["#EBF73F", "#4ADE80", "#3B82F6", "#F59E0B", "#EF4444", "#A855F7"];

// Revenue data from Dune
const monthlyRevenueData = [
  { month: "Jan", revenue: 110204 },
  { month: "Feb", revenue: 144683 },
  { month: "Mar", revenue: 256615 },
  { month: "Apr", revenue: 282142 },
  { month: "May", revenue: 58764 },
  { month: "Jul", revenue: 38954 },
  { month: "Aug", revenue: 272984 },
  { month: "Sep", revenue: 204633 },
  { month: "Oct", revenue: 34893 },
];

const quarterlyRevenueData = [
  { quarter: "Q1 2025", fees: 511502, revenue: 511502, earnings: 511502 },
  { quarter: "Q2 2025", fees: 340906, revenue: 340906, earnings: 340906 },
  { quarter: "Q3 2025", fees: 516571, revenue: 516571, earnings: 516571 },
  { quarter: "Q4 2025", fees: 34893, revenue: 34893, earnings: 34893 },
];

const resourceDistributionData = [
  { name: "CPU (Cores)", value: 1537 },
  { name: "Storage (GB)", value: 59773 },
  { name: "Memory (GB)", value: 3607 },
];

const providerMetricsData = [
  { metric: "Providers", value: 1025 },
  { metric: "Active", value: 1202 },
  { metric: "Machines", value: 5300 },
];

const supplyData = [
  { name: "Circulating", value: 133.39, color: "#EBF73F" },
  { name: "Total Supply", value: 658.46, color: "#4ADE80" },
  { name: "Max Supply", value: 1000, color: "#3B82F6" },
  { name: "Burnt", value: 20.37, color: "#EF4444" },
];

const deploymentsData = [
  { month: "Jan", deployments: 1800 },
  { month: "Feb", deployments: 2100 },
  { month: "Mar", deployments: 2400 },
  { month: "Apr", deployments: 2700 },
  { month: "May", deployments: 3000 },
  { month: "Jul", deployments: 3500 },
  { month: "Aug", deployments: 4000 },
  { month: "Sep", deployments: 4100 },
  { month: "Oct", deployments: 4422 },
];

const tokenPriceData = [
  { day: "Day 1", price: 0.055 },
  { day: "Day 2", price: 0.052 },
  { day: "Day 3", price: 0.053 },
  { day: "Day 4", price: 0.051 },
  { day: "Day 5", price: 0.050 },
  { day: "Day 6", price: 0.049 },
  { day: "Day 7", price: 0.05166 },
];

export default function Analytics() {
  const [activeTab, setActiveTab] = useState<"dune" | "defillama" | "overview">("overview");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
        
        {/* Tab Navigation */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded transition duration-150 ${
              activeTab === "overview"
                ? "bg-[#EBF73F] text-black font-semibold"
                : "bg-[#141414] text-white border border-gray-800 hover:border-[#EBF73F]"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("dune")}
            className={`px-4 py-2 rounded transition duration-150 ${
              activeTab === "dune"
                ? "bg-[#EBF73F] text-black font-semibold"
                : "bg-[#141414] text-white border border-gray-800 hover:border-[#EBF73F]"
            }`}
          >
            Dune Analytics
          </button>
          <button
            onClick={() => setActiveTab("defillama")}
            className={`px-4 py-2 rounded transition duration-150 ${
              activeTab === "defillama"
                ? "bg-[#EBF73F] text-black font-semibold"
                : "bg-[#141414] text-white border border-gray-800 hover:border-[#EBF73F]"
            }`}
          >
            DefiLlama Analytics
          </button>
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Token Price & Supply Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Token Price Chart */}
            <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
              
              <h2 className="text-xl font-semibold text-white mb-6">Token Price (7 Days)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={tokenPriceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1F2937", 
                      border: "1px solid #374151",
                      borderRadius: "8px",
                      color: "#EBF73F" 
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#EBF73F" 
                    fill="#EBF73F" 
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Supply Distribution */}
            <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
              
              <h2 className="text-xl font-semibold text-white mb-6">Token Supply Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={supplyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {supplyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1F2937", 
                      border: "1px solid #374151",
                      borderRadius: "8px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Revenue */}
          <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
            
            <h2 className="text-xl font-semibold text-white mb-6">Monthly Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={monthlyRevenueData}>
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
                <Bar dataKey="revenue" fill="#EBF73F" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Resource & Provider Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Resource Distribution */}
            <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
              
              <h2 className="text-xl font-semibold text-white mb-6">Resource Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={resourceDistributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1F2937", 
                      border: "1px solid #374151",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="value" fill="#3B82F6">
                    {resourceDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Provider Metrics */}
            <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
              
              <h2 className="text-xl font-semibold text-white mb-6">Provider Metrics</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={providerMetricsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1F2937", 
                      border: "1px solid #374151",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="value" fill="#4ADE80" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Total Deployments */}
          <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
            
            <h2 className="text-xl font-semibold text-white mb-6">Total Deployments Growth</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={deploymentsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#1F2937", 
                    border: "1px solid #374151",
                    borderRadius: "8px"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="deployments" 
                  stroke="#EBF73F" 
                  strokeWidth={3}
                  dot={{ fill: "#EBF73F", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Dune Analytics Tab */}
      {activeTab === "dune" && (
        <div className="space-y-8">
          {/* Monthly Revenue */}
          <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
            
            <h2 className="text-xl font-semibold text-white mb-6">Monthly Revenue ($)</h2>
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
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Resource Distribution */}
          <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
            
            <h2 className="text-xl font-semibold text-white mb-6">Resource Distribution</h2>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={resourceDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {resourceDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#1F2937", 
                    border: "1px solid #374151",
                    borderRadius: "8px"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Provider Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Providers Onboarded */}
            <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
              
              <h2 className="text-xl font-semibold text-white mb-6">Network Growth</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={providerMetricsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1F2937", 
                      border: "1px solid #374151",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="value" fill="#EBF73F" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Deployments */}
            <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
              
              <h2 className="text-xl font-semibold text-white mb-6">Deployments Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={deploymentsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1F2937", 
                      border: "1px solid #374151",
                      borderRadius: "8px"
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="deployments" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: "#3B82F6", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* DefiLlama Analytics Tab */}
      {activeTab === "defillama" && (
        <div className="space-y-8">
          {/* Quarterly Revenue Comparison */}
          <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
            
            <h2 className="text-xl font-semibold text-white mb-6">Quarterly Revenue Comparison</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={quarterlyRevenueData}>
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

          {/* Monthly Revenue Detailed */}
          <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
            
            <h2 className="text-xl font-semibold text-white mb-6">Monthly Income Statement</h2>
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
        </div>
      )}
    </div>
  );
}

