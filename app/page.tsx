import Link from "next/link";
import Image from "next/image";
import TrueFocus from "./components/TrueFocus";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black relative">
      {/* Top Right Image */}
      <div className="absolute top-24 right-8">
        <Image
          src="https://imgs.search.brave.com/kswY2Vz5w2_pbPCWKKCPnoEKI34abLbllO1C_P_Yk6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9meGRh/aWx5cmVwb3J0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNi9Ob2RlT3Bz/LUxhdW5jaGVzLV9O/T0RFLnBuZw"
          alt="NodeOps"
          width={400}
          height={200}
          className="object-contain"
        />
      </div>
      
      {/* Bottom Left Image */}
      <div className="absolute bottom-24 left-8">
        <Image
          src="https://imgs.search.brave.com/kswY2Vz5w2_pbPCWKKCPnoEKI34abLbllO1C_P_Yk6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9meGRh/aWx5cmVwb3J0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNi9Ob2RlT3Bz/LUxhdW5jaGVzLV9O/T0RFLnBuZw"
          alt="NodeOps"
          width={400}
          height={200}
          className="object-contain"
        />
      </div>
      
      <div className="text-center space-y-8 max-w-3xl px-8">
        <TrueFocus 
          sentence="NodeOps"
          manualMode={false}
          blurAmount={5}
          borderColor="#EBF73F"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <p className="text-xl text-gray-300 leading-relaxed">
          The ultimate Node-as-a-Service platform for DeFi and blockchain infrastructure, with $NODE at the heart of the ecosystem. NodeOps provides seamless node deployment, staking, security, and monitoring—empowering teams to scale, innovate, and thrive in the decentralized world.
        </p>
        <Link
          href="/app"
          className="inline-block bg-[#EBF73F] hover:bg-[#141414] text-black hover:text-white font-bold text-xl py-5 px-12 transition duration-200 shadow-lg relative"
        >
          <span className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></span>
          <span className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></span>
          <span className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></span>
          <span className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></span>
          Dashboard
        </Link>
      </div>
    </div>
  );
}
