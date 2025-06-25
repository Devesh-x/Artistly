"use client";

import { useState } from "react";

const CATEGORIES = ["Singer", "Dancer", "DJ", "Speaker"];
const LANGUAGES = ["Hindi", "English", "Punjabi", "Tamil", "Bengali"];
const FEES = ["₹10,000 - ₹20,000", "₹15,000 - ₹25,000", "₹20,000 - ₹30,000", "₹25,000 - ₹35,000"];

export default function OnboardPage() {
  const [form, setForm] = useState({
    name: "",
    bio: "",
    categories: [],
    languages: [],
    fee: "",
    location: "",
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm(f => ({ ...f, image: files[0] }));
    } else if (type === "select-multiple") {
      setForm(f => ({ ...f, [name]: Array.from(e.target.selectedOptions, o => o.value) }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function handleCheckbox(name, value) {
    setForm(f => {
      const arr = f[name];
      return {
        ...f,
        [name]: arr.includes(value)
          ? arr.filter(v => v !== value)
          : [...arr, value],
      };
    });
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.bio.trim()) errs.bio = "Bio is required";
    if (form.categories.length === 0) errs.categories = "Select at least one category";
    if (form.languages.length === 0) errs.languages = "Select at least one language";
    if (!form.fee) errs.fee = "Fee range is required";
    if (!form.location.trim()) errs.location = "Location is required";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        console.log("Artist submitted:", form);
        setSubmitted(false);
        setForm({ name: "", bio: "", categories: [], languages: [], fee: "", location: "", image: null });
      }, 1000);
    }
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#ff2d7a] mb-6">Onboard New Artist</h1>
      <form onSubmit={handleSubmit} className="bg-white border-2 border-[#ffb800] rounded-lg p-6 flex flex-col gap-4 shadow">
        <div>
          <label className="block font-semibold mb-1 text-black">Name *</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border-2 border-[#ffb800] rounded px-3 py-2 text-black" />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1 text-black">Bio *</label>
          <textarea name="bio" value={form.bio} onChange={handleChange} className="w-full border-2 border-[#ffb800] rounded px-3 py-2 text-black" rows={3} />
          {errors.bio && <div className="text-red-500 text-sm mt-1">{errors.bio}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1 text-black">Category *</label>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(cat => (
              <label key={cat} className="flex items-center gap-1">
                <input type="checkbox" checked={form.categories.includes(cat)} onChange={() => handleCheckbox("categories", cat)} />
                {cat}
              </label>
            ))}
          </div>
          {errors.categories && <div className="text-red-500 text-sm mt-1">{errors.categories}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1 text-black">Languages *</label>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map(lang => (
              <label key={lang} className="flex items-center gap-1">
                <input type="checkbox" checked={form.languages.includes(lang)} onChange={() => handleCheckbox("languages", lang)} />
                {lang}
              </label>
            ))}
          </div>
          {errors.languages && <div className="text-red-500 text-sm mt-1">{errors.languages}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1 text-black">Fee Range *</label>
          <select name="fee" value={form.fee} onChange={handleChange} className="w-full border-2 border-[#ffb800] rounded px-3 py-2 text-black">
            <option value="">Select Fee Range</option>
            {FEES.map(fee => <option key={fee} value={fee}>{fee}</option>)}
          </select>
          {errors.fee && <div className="text-red-500 text-sm mt-1">{errors.fee}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1 text-black">Location *</label>
          <input name="location" value={form.location} onChange={handleChange} className="w-full border-2 border-[#ffb800] rounded px-3 py-2 text-black" />
          {errors.location && <div className="text-red-500 text-sm mt-1">{errors.location}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1 text-black">Image (optional)</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full" />
        </div>
        <button type="submit" disabled={submitted} className="mt-2 px-6 py-2 bg-[#ff2d7a] text-white rounded font-bold hover:bg-[#ff4f9a] transition">
          {submitted ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
} 