export default function LandingFooter() {
  return (
    <footer className="border-t border-white/8 px-6 py-8" style={{ background: "#0a1628" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <span className="text-sm font-semibold text-slate-300">
          BioPath Network
        </span>

        <div className="flex items-start gap-2.5 max-w-lg text-center md:text-left">
          <svg
            className="w-4 h-4 text-slate-500 flex-shrink-0 mt-px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">Educational tool only.</span>{" "}
            BioPath is designed for learning biochemistry concepts.
            It is not intended for diagnosis, treatment guidance, or clinical decision-making.
          </p>
        </div>

        <span className="text-xs text-slate-500">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
