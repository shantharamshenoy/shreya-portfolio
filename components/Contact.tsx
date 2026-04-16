export default function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-16 pt-12 lg:px-16 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-[#420CA3] px-8 py-10 text-white shadow-2xl shadow-[#420CA3]/25 lg:px-12 lg:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#F5D77A] lg:text-5xl">
              Let's create something memorable.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#F3E7C2]/80">
              This section can later be updated with final contact details, social
              links, or a contact form once the portfolio content is ready to go live.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:shreyakamath4@gmail.com"
              className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#2E1065] transition hover:bg-[#E6C76A] hover:-translate-y-0.5"
            >
              Send Mail
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-ravindra-shenoy-403889150/" target="_blank"
              className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#2E1065] transition hover:bg-[#E6C76A] hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}