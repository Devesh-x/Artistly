import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-[#fff6fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: About & Quote */}
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-extrabold text-[#ff2d7a] mb-2">Welcome to Artistly</h1>
          <p className="text-lg text-[#222] mb-4">
            <span className="font-bold text-[#ffb800]">Artistly</span> is your go-to platform for booking the best performing artists for any event. Discover Singers, Dancers, DJs, Speakers, and more — all in one place!
          </p>
          <blockquote className="border-l-4 border-[#ffb800] pl-4 italic text-[#ff2d7a] bg-[#fff0e1] py-2 rounded">
            &ldquo;Bringing talent and events together, one performance at a time.&rdquo;
          </blockquote>
          <a href="/artists" className="inline-block w-max px-8 py-3 bg-[#ff2d7a] text-white rounded-lg font-bold shadow hover:bg-[#ff4f9a] transition">Explore Artists</a>
        </div>
        {/* Right: Illustration */}
        <div className="flex justify-center items-center">
          <Image
            src="/hero-illustration.png"
            alt="People exploring and enjoying art - Artistly.com"
            width={480}
            height={480}
            className="rounded-xl shadow-lg border-4 border-[#ffb800] bg-white"
            priority
          />
        </div>
      </div>
      {/* Category Cards below hero section */}
      <section className="w-full max-w-4xl mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <CategoryCard title="Singers" icon="🎤" />
        <CategoryCard title="Dancers" icon="💃" />
        <CategoryCard title="DJs" icon="🎧" />
        <CategoryCard title="Speakers" icon="🎙️" />
      </section>
    </div>
  );
}

function CategoryCard({ title, icon }) {
  return (
    <a href={`/artists?category=${encodeURIComponent(title)}`} className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer border-2 border-[#ffb800] hover:bg-[#fff0e1]">
      <span className="text-4xl mb-2">{icon}</span>
      <span className="font-semibold text-lg text-[#ff2d7a]">{title}</span>
    </a>
  );
}
