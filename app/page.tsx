import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">Welcome</h1>
        <p className="text-lg text-gray-400">Get started with your dashboard</p>
        <Link
          href="/app"
          className="inline-block bg-[#EBF73F] hover:bg-[#141414] text-black hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
