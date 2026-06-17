export default function LandingFooter() {
  return (
    <footer className="border-t border-white/8 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-medium text-slate-400">
          BioPath Network
        </span>

        <p className="text-xs text-slate-600 text-center max-w-lg">
          <span className="font-medium text-slate-500">Educational tool only.</span>{" "}
          BioPath is designed for learning biochemistry concepts. It is not intended for diagnosis,
          treatment guidance, or clinical decision-making.
        </p>

        <span className="text-xs text-slate-700">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
