export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#D4AF37]/30 bg-[#BFA46A] p-8 shadow-2xl shadow-[#D4AF37]/10 lg:grid-cols-2 lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2E1065]">
            About the work
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#2E1065] lg:text-5xl">
            A versatile body of design across print, digital, and brand communication.
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-slate-600">
            This portfolio brings together work across branding, campaigns,
            packaging, social media, interface design, and visual storytelling.
            The current release is intentionally structured as a static showcase
            so it can launch quickly, while remaining ready for future content,
            uploads, and expansion.
          </p><p className="text-base leading-8 text-slate-600">
            This portfolio brings together work across branding, campaigns,
            packaging, social media, interface design, and visual storytelling.
            The current release is intentionally structured as a static showcase
            so it can launch quickly, while remaining ready for future content,
            uploads, and expansion.
          </p>
        </div>
      </div>
    </section>
  );
}