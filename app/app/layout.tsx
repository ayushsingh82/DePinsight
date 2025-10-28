import Link from "next/link";
import "./layout.css";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold">My App</h1>
        </div>
        <nav className="flex-1 py-4">
          <Link
            href="/app"
            className="block px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
          >
            Dashboard
          </Link>
          <Link
            href="/app/revenue"
            className="block px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
          >
            Revenue
          </Link>
          <Link
            href="/app/shares"
            className="block px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
          >
            Shares
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}

