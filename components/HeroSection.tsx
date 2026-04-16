export default function HeroSection() {
  return (
    <section className="px-6 py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Creative Portfolio
          </p> */}

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#D4AF37] lg:text-7xl">
            Designs that shape brands, stories, and experiences.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#E8E1D1]/80">
            A curated showcase of branding, packaging, digital design,
            campaigns, and visual storytelling crafted with creativity and purpose.
          </p>

          <button className="mt-8 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#2E1065] transition hover:bg-[#E6C76A] hover:-translate-y-0.5">
            <a href="#work">
            Explore Work
          </a>
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-[#D4AF37]/25 via-[#8A7EE4]/20 to-[#51CED9]/20 blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-[#D4AF37]/70 shadow-2xl shadow-[#D4AF37]/10 lg:h-80 lg:w-80">
              <img
                src="/images/shreya.jpg"
                alt="Shreya R Shenoy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}