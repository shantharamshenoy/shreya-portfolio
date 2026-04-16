export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#D4AF37]/30 bg-[#BFA46A] p-8 shadow-2xl shadow-[#D4AF37]/10 lg:grid-cols-2 lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2E1065]">
            About the work
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#2E1065] lg:text-5xl">
            Design that moves between print, brand, and digital.
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-slate-800 px-2 mt-4">
            This portfolio is a collection of work across branding, packaging, campaigns, and interface design. Over the years, I've had the opportunity to work with brands like Coca-Cola India, Officer's Choice, and Max Life Insurance - shaping visuals across different formats and audiences.
          </p>
          <p className="text-base leading-8 text-slate-800 px-2 mt-6">
             I enjoy simplifying ideas and giving them form - whether through packaging on a shelf or a clean, structured digital layout. Recently, my focus has expanded into UI/UX, where I'm exploring how design can be both intuitive and visually distinct.
          </p>
          <button className="mt-8 rounded-full bg-[#2E1065] px-6 py-3 font-semibold text-[#E6C76A] transition hover:bg-[#2E1065] hover:-translate-y-0.5">
            <a href="/docs/Shreya_Shenoy_Resume.pdf" download >
            Download Resume
          </a>
          </button>
        </div>
      </div>
    </section>
  );
}