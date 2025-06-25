"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#ff2d7a] shadow-sm sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-white">Artistly.com</Link>
        <ul className="flex gap-6 text-base font-medium">
          <li><Link href="/artists" className="text-black hover:underline">Artists</Link></li>
          <li><Link href="/onboard" className="text-black hover:underline">Onboard Artist</Link></li>
          <li><Link href="/dashboard" className="text-black hover:underline">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
} 