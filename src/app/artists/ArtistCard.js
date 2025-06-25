"use client";

export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white border-2 border-[#ffb800] rounded-lg p-6 flex flex-col gap-2 shadow hover:shadow-lg transition">
      <div className="text-xl font-bold text-[#ff2d7a]">{artist.name}</div>
      <div className="text-sm text-gray-700">{artist.category}</div>
      <div className="text-sm text-gray-700">{artist.location}</div>
      <div className="text-sm text-[#ffb800] font-semibold">{artist.price}</div>
      <div className="text-xs text-gray-500 mb-2">Languages: {artist.languages.join(", ")}</div>
      <button className="mt-3 px-4 py-2 bg-[#ff2d7a] text-white rounded font-semibold hover:bg-[#ff4f9a] transition">Ask for Quote</button>
    </div>
  );
} 