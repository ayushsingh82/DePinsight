import Link from "next/link";
import "./layout.css";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 bg-black border-r border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <Link href="/" className="text-2xl font-bold text-white hover:text-[#EBF73F] transition duration-150">
            My App
          </Link>
        </div>
        <nav className="flex-1 py-4">
          <Link
            href="/app"
            className="block px-6 py-3 text-white hover:bg-[#141414] transition duration-150"
          >
            Dashboard
          </Link>
          <Link
            href="/app/revenue"
            className="block px-6 py-3 text-white hover:bg-[#141414] transition duration-150"
          >
            Revenue
          </Link>
          <Link
            href="/app/shares"
            className="block px-6 py-3 text-white hover:bg-[#141414] transition duration-150"
          >
            Shares
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-black">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}

