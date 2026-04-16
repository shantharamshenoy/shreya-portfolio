export default function Header() {
  return (
    <header className="px-6 py-6 lg:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold uppercase tracking-[0.18em] text-[#D4AF37] lg:text-3xl">
            SHREYA SHENOY
          </span>
         <span className="mt-2 block h-[4px] w-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#8A7EE4] to-[#51CED9] shadow-[0_0_12px_rgba(212,175,55,0.25)]" />
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-white/75 md:flex">
          <a href="#work" className="transition hover:text-[#D4AF37]">
            Work
          </a>
          <a href="#about" className="transition hover:text-[#D4AF37]">
            About
          </a>
          <a href="#case-studies" className="transition hover:text-[#D4AF37]">
            Case Studies
          </a>
          <a href="#contact" className="transition hover:text-[#D4AF37]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}