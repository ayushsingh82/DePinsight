import Link from "next/link";
import Image from "next/image";
import TrueFocus from "./components/TrueFocus";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden px-4">
      {/* Top Right Image */}
      <div className="hidden sm:block absolute top-16 right-4 sm:top-20 sm:right-8">
        <Image
          src="https://imgs.search.brave.com/kswY2Vz5w2_pbPCWKKCPnoEKI34abLbllO1C_P_Yk6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9meGRh/aWx5cmVwb3J0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNi9Ob2RlT3Bz/LUxhdW5jaGVzLV9O/T0RFLnBuZw"
          alt="NodeOps"
          width={400}
          height={200}
          className="object-contain w-40 sm:w-56 md:w-80 lg:w-[400px] h-auto"
        />
      </div>

      {/* Bottom Left Image */}
      <div className="hidden sm:block absolute bottom-16 left-4 sm:bottom-20 sm:left-8">
        <Image
          src="https://imgs.search.brave.com/kswY2Vz5w2_pbPCWKKCPnoEKI34abLbllO1C_P_Yk6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9meGRh/aWx5cmVwb3J0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNi9Ob2RlT3Bz/LUxhdW5jaGVzLV9O/T0RFLnBuZw"
          alt="NodeOps"
          width={400}
          height={200}
          className="object-contain w-40 sm:w-56 md:w-80 lg:w-[400px] h-auto"
        />
      </div>

      <div className="text-center space-y-6 sm:space-y-8 max-w-3xl px-2 sm:px-8 py-24 sm:py-0">
        <TrueFocus
          sentence="DePinsight"
          manualMode={false}
          blurAmount={5}
          borderColor="#EBF73F"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          The ultimate analytics platform for DePIN protocols and blockchain infrastructure. DePinsight provides comprehensive insights into revenue, metrics, network growth, and token analytics—empowering teams to make data-driven decisions in the decentralized world.
        </p>
        <Link
          href="/app"
          className="inline-block bg-[#EBF73F] hover:bg-[#141414] text-black hover:text-white font-bold text-base sm:text-lg md:text-xl py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 transition duration-200 shadow-lg relative"
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
