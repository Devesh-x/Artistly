"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const ArtistCard = dynamic(() => import("./ArtistCard"), { loading: () => <div>Loading...</div> });

const ARTISTS = [
  // Singers
  { id: 1, name: "Asha Melody", category: "Singer", location: "Mumbai", price: "₹20,000 - ₹30,000", minPrice: 20000, maxPrice: 30000, languages: ["Hindi", "English"] },
  { id: 2, name: "Priya Beats", category: "Singer", location: "Delhi", price: "₹22,000 - ₹32,000", minPrice: 22000, maxPrice: 32000, languages: ["Hindi", "Punjabi"] },
  { id: 3, name: "Rohan Voice", category: "Singer", location: "Bangalore", price: "₹18,000 - ₹28,000", minPrice: 18000, maxPrice: 28000, languages: ["English"] },
  { id: 4, name: "Simran Notes", category: "Singer", location: "Kolkata", price: "₹19,000 - ₹29,000", minPrice: 19000, maxPrice: 29000, languages: ["Hindi", "Bengali"] },
  { id: 5, name: "Vikas Harmony", category: "Singer", location: "Chennai", price: "₹21,000 - ₹31,000", minPrice: 21000, maxPrice: 31000, languages: ["Tamil", "English"] },
  // Dancers
  { id: 6, name: "Nisha Groove", category: "Dancer", location: "Bangalore", price: "₹18,000 - ₹28,000", minPrice: 18000, maxPrice: 28000, languages: ["Hindi"] },
  { id: 7, name: "Leela Steps", category: "Dancer", location: "Kolkata", price: "₹16,000 - ₹24,000", minPrice: 16000, maxPrice: 24000, languages: ["Bengali"] },
  { id: 8, name: "Amit Twirl", category: "Dancer", location: "Delhi", price: "₹20,000 - ₹30,000", minPrice: 20000, maxPrice: 30000, languages: ["Hindi", "Punjabi"] },
  { id: 9, name: "Sneha Rhythm", category: "Dancer", location: "Mumbai", price: "₹17,000 - ₹27,000", minPrice: 17000, maxPrice: 27000, languages: ["Hindi", "English"] },
  { id: 10, name: "Ritu Moves", category: "Dancer", location: "Chennai", price: "₹15,000 - ₹25,000", minPrice: 15000, maxPrice: 25000, languages: ["Tamil"] },
  // DJs
  { id: 11, name: "DJ RaveX", category: "DJ", location: "Delhi", price: "₹15,000 - ₹25,000", minPrice: 15000, maxPrice: 25000, languages: ["English"] },
  { id: 12, name: "MC Flow", category: "DJ", location: "Mumbai", price: "₹17,000 - ₹27,000", minPrice: 17000, maxPrice: 27000, languages: ["Hindi"] },
  { id: 13, name: "DJ Sonic", category: "DJ", location: "Bangalore", price: "₹19,000 - ₹29,000", minPrice: 19000, maxPrice: 29000, languages: ["English"] },
  { id: 14, name: "DJ Pulse", category: "DJ", location: "Kolkata", price: "₹16,000 - ₹26,000", minPrice: 16000, maxPrice: 26000, languages: ["Bengali"] },
  { id: 15, name: "DJ Echo", category: "DJ", location: "Chennai", price: "₹18,000 - ₹28,000", minPrice: 18000, maxPrice: 28000, languages: ["Tamil"] },
  // Speakers
  { id: 16, name: "Rahul Talks", category: "Speaker", location: "Chennai", price: "₹10,000 - ₹20,000", minPrice: 10000, maxPrice: 20000, languages: ["Tamil", "English"] },
  { id: 17, name: "Vikram Inspire", category: "Speaker", location: "Bangalore", price: "₹12,000 - ₹22,000", minPrice: 12000, maxPrice: 22000, languages: ["Hindi", "English"] },
  { id: 18, name: "Meera Motivate", category: "Speaker", location: "Delhi", price: "₹14,000 - ₹24,000", minPrice: 14000, maxPrice: 24000, languages: ["Hindi"] },
  { id: 19, name: "Sanjay Wisdom", category: "Speaker", location: "Mumbai", price: "₹13,000 - ₹23,000", minPrice: 13000, maxPrice: 23000, languages: ["Hindi", "English"] },
  { id: 20, name: "Anjali Guide", category: "Speaker", location: "Kolkata", price: "₹11,000 - ₹21,000", minPrice: 11000, maxPrice: 21000, languages: ["Bengali"] },
];

const CATEGORIES = ["Singer", "Dancer", "DJ", "Speaker"];
const LOCATIONS = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
const LANGUAGES = ["Hindi", "English", "Punjabi", "Tamil", "Bengali"];

export default function ArtistsPage() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [languages, setLanguages] = useState([]);

  const filtered = ARTISTS.filter((a) => {
    const matchesCategory = !category || a.category === category;
    const matchesLocation = !location || a.location === location;
    const matchesName = !name || a.name.toLowerCase().includes(name.toLowerCase());
    const matchesMinPrice = !minPrice || a.minPrice >= parseInt(minPrice);
    const matchesMaxPrice = !maxPrice || a.maxPrice <= parseInt(maxPrice);
    const matchesLanguages = languages.length === 0 || languages.every(l => a.languages.includes(l));
    return (
      matchesCategory &&
      matchesLocation &&
      matchesName &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesLanguages
    );
  });

  function handleLanguageChange(lang) {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  }

  return (
    <div className="min-h-[60vh] max-w-6xl mx-auto py-10 px-4 bg-[#fff6fa]">
      <h1 className="text-3xl font-bold text-[#ff2d7a] mb-6">Artist Listing</h1>
      <div className="flex flex-wrap gap-4 mb-8 items-end">
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border-2 border-[#ffb800] rounded px-4 py-2 text-black"
        />
        <select value={category} onChange={e => setCategory(e.target.value)} className="border-2 border-[#ffb800] rounded px-4 py-2 text-black">
          <option value="">All Categories</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={location} onChange={e => setLocation(e.target.value)} className="border-2 border-[#ffb800] rounded px-4 py-2 text-black">
          <option value="">All Locations</option>
          {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          className="border-2 border-[#ffb800] rounded px-4 py-2 w-28 text-black"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          className="border-2 border-[#ffb800] rounded px-4 py-2 w-28 text-black"
        />
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map(lang => (
            <label key={lang} className="flex items-center gap-1 text-black">
              <input
                type="checkbox"
                checked={languages.includes(lang)}
                onChange={() => handleLanguageChange(lang)}
              />
              {lang}
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.length === 0 && <div className="col-span-full text-center text-gray-500">No artists found.</div>}
        {filtered.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
} 