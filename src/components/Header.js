"use client";

export default function Header() {
  return (
    <header className="w-full bg-[#ff2d7a] shadow-sm sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="text-2xl font-bold text-white">Artistly.com</a>
        <ul className="flex gap-6 text-base font-medium">
          <li><a href="/artists" className="text-black hover:underline">Artists</a></li>
          <li><a href="/onboard" className="text-black hover:underline">Onboard Artist</a></li>
          <li><a href="/dashboard" className="text-black hover:underline">Dashboard</a></li>
        </ul>
      </nav>
    </header>
  );
} 