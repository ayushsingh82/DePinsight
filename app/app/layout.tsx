"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./layout.css";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/app", label: "Dashboard" },
    { href: "/app/revenue", label: "Revenue" },
    { href: "/app/shares", label: "Shares" },
    { href: "/app/dune", label: "Dune" },
    { href: "/app/defillama", label: "DefiLlama" },
  ];

  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 bg-black border-r border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <Link href="/" className="text-2xl font-bold text-white hover:text-[#EBF73F] transition duration-150">
            NodeOps
          </Link>
        </div>
        <nav className="flex-1 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-3 transition duration-150 ${
                  isActive
                    ? "bg-[#EBF73F] text-black"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-black">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
