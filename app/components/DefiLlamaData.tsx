"use client";

interface IncomeRowProps {
  label: string;
  q4?: string;
  q3?: string;
  q2?: string;
  q1?: string;
  yearly?: string;
}

function IncomeRow({ label, q4, q3, q2, q1, yearly }: IncomeRowProps) {
  return (
    <div className="grid grid-cols-5 gap-4 py-3 border-b border-gray-800 last:border-b-0">
      <div className="text-sm text-gray-400 font-medium">{label}</div>
      {q4 && <div className="text-sm text-white font-mono text-right">{q4}</div>}
      {q3 && <div className="text-sm text-white font-mono text-right">{q3}</div>}
      {q2 && <div className="text-sm text-white font-mono text-right">{q2}</div>}
      {q1 && <div className="text-sm text-white font-mono text-right">{q1}</div>}
      {yearly && (
        <>
          <div className="text-sm text-white font-mono text-right col-span-4">{yearly}</div>
        </>
      )}
    </div>
  );
}

function QuarterlyTable() {
  return (
    <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
      
      <h3 className="text-xl font-semibold text-white mb-4">Quarterly Income Statement for NodeOps</h3>
      <div className="mb-4 text-sm text-gray-400">Q4 2025</div>
      
      <div className="overflow-x-auto">
        <div className="grid grid-cols-5 gap-4 pb-3 border-b border-gray-700 mb-3">
          <div className="text-xs text-gray-500 font-medium"></div>
          <div className="text-xs text-gray-500 font-medium text-right">Q4 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Q3 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Q2 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Q1 2025</div>
        </div>
        <IncomeRow label="Fees" q4="$34,893" q3="$516,571" q2="$340,906" q1="$511,502" />
        <IncomeRow label="Revenue" q4="$34,893" q3="$516,571" q2="$340,906" q1="$511,502" />
        <IncomeRow label="Earnings" q4="$34,893" q3="$516,571" q2="$340,906" q1="$511,502" />
        <IncomeRow label="Token Holder Net Income" q4="$0" q3="$0" q2="$0" q1="$0" />
      </div>
    </div>
  );
}

function YearlyTable() {
  return (
    <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
      
      <h3 className="text-xl font-semibold text-white mb-4">Yearly Income Statement for NodeOps</h3>
      <div className="mb-4 text-sm text-gray-400">2025</div>
      
      <div className="overflow-x-auto">
        <div className="grid grid-cols-2 gap-4 pb-3 border-b border-gray-700 mb-3">
          <div className="text-xs text-gray-500 font-medium"></div>
          <div className="text-xs text-gray-500 font-medium text-right">2025</div>
        </div>
        <IncomeRow label="Fees" yearly="$1.4m" />
        <IncomeRow label="Revenue" yearly="$1.4m" />
        <IncomeRow label="Earnings" yearly="$1.4m" />
        <IncomeRow label="Token Holder Net Income" yearly="$0" />
      </div>
    </div>
  );
}

function MonthlyTable() {
  const months = [
    { month: "Oct 2025", value: "$34,893" },
    { month: "Sep 2025", value: "$204,633" },
    { month: "Aug 2025", value: "$272,984" },
    { month: "Jul 2025", value: "$38,954" },
    { month: "May 2025", value: "$58,764" },
    { month: "Apr 2025", value: "$282,142" },
    { month: "Mar 2025", value: "$256,615" },
    { month: "Feb 2025", value: "$144,683" },
    { month: "Jan 2025", value: "$110,204" },
  ];

  return (
    <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
      
      <h3 className="text-xl font-semibold text-white mb-4">Monthly Income Statement for NodeOps</h3>
      <div className="mb-4 text-sm text-gray-400">Oct 2025</div>
      
      <div className="overflow-x-auto">
        <div className="grid grid-cols-5 gap-4 pb-3 border-b border-gray-700 mb-3">
          <div className="text-xs text-gray-500 font-medium"></div>
          <div className="text-xs text-gray-500 font-medium text-right">Oct 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Sep 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Aug 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Jul 2025</div>
        </div>
        <IncomeRow 
          label="Fees" 
          q4={months[0].value} 
          q3={months[1].value} 
          q2={months[2].value} 
          q1={months[3].value} 
        />
        <IncomeRow 
          label="Revenue" 
          q4={months[0].value} 
          q3={months[1].value} 
          q2={months[2].value} 
          q1={months[3].value} 
        />
        <IncomeRow 
          label="Earnings" 
          q4={months[0].value} 
          q3={months[1].value} 
          q2={months[2].value} 
          q1={months[3].value} 
        />
        <IncomeRow 
          label="Token Holder Net Income" 
          q4="$0" 
          q3="$0" 
          q2="$0" 
          q1="$0" 
        />
        
        <div className="grid grid-cols-5 gap-4 pt-4 mt-4 border-t border-gray-700">
          <div className="text-xs text-gray-500 font-medium"></div>
          <div className="text-xs text-gray-500 font-medium text-right">May 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Apr 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Mar 2025</div>
          <div className="text-xs text-gray-500 font-medium text-right">Feb 2025</div>
        </div>
        <IncomeRow 
          label="Fees" 
          q4={months[4].value} 
          q3={months[5].value} 
          q2={months[6].value} 
          q1={months[7].value} 
        />
        <IncomeRow 
          label="Revenue" 
          q4={months[4].value} 
          q3={months[5].value} 
          q2={months[6].value} 
          q1={months[7].value} 
        />
        <IncomeRow 
          label="Earnings" 
          q4={months[4].value} 
          q3={months[5].value} 
          q2={months[6].value} 
          q1={months[7].value} 
        />
        <IncomeRow 
          label="Token Holder Net Income" 
          q4="$0" 
          q3="$0" 
          q2="$0" 
          q1="$0" 
        />
        
        <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-gray-700">
          <div className="text-xs text-gray-500 font-medium"></div>
          <div className="text-xs text-gray-500 font-medium text-right">Jan 2025</div>
        </div>
        <IncomeRow label="Fees" yearly={months[8].value} />
        <IncomeRow label="Revenue" yearly={months[8].value} />
        <IncomeRow label="Earnings" yearly={months[8].value} />
        <IncomeRow label="Token Holder Net Income" yearly="$0" />
      </div>
    </div>
  );
}

function ProtocolInfo() {
  return (
    <div className="bg-[#141414] border border-gray-800 shadow-md p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#EBF73F]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#EBF73F]"></div>
      
      <h3 className="text-xl font-semibold text-white mb-6">Protocol Information</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-300 leading-relaxed">
            NodeOps Network is a decentralized infrastructure stack powering compute and AI workloads. It enables developers and enterprises to deploy, manage, and monetize compute services seamlessly. The protocol generates on-chain revenue from product subscriptions, deployment fees, and automated $NODE-to-credits conversions for workloads.
          </p>
        </div>
        
        <div className="pt-4 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-400 mb-2">Category:</div>
              <div className="text-sm text-white">DePIN</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-2">Audits:</div>
              <div className="text-sm text-gray-500">-</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-2">Fees:</div>
              <div className="text-sm text-gray-300">Payment made by the users</div>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-[#EBF73F] hover:underline mt-1 inline-block"
              >
                View code on GitHub
              </a>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-2">Revenue:</div>
              <div className="text-sm text-gray-300">All fees are protocol revenue</div>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-[#EBF73F] hover:underline mt-1 inline-block"
              >
                View code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DefiLlamaData() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-6">DefiLlama Analytics</h1>
      
      <ProtocolInfo />
      
      <YearlyTable />
      
      <QuarterlyTable />
      
      <MonthlyTable />
    </div>
  );
}

