import Link from "next/link";

export default function LandingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#060d1a]/80 backdrop-blur-md border-b border-white/5">
      <span className="text-white font-semibold text-base tracking-tight">
        BioPath
      </span>

      <div className="hidden md:flex items-center gap-8">
        <a href="#journeys" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
          Pathways
        </a>
        <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
          About
        </a>
      </div>

      <Link
        href="/learn"
        className="px-4 py-2 text-sm font-medium rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
      >
        Start learning
      </Link>
    </nav>
  );
}
