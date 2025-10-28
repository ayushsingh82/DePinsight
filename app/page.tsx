import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome</h1>
        <p className="text-lg text-gray-600">Get started with your dashboard</p>
        <Link
          href="/app"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
