"use client";

import { motion } from "framer-motion";

const orbitalDust = [
  {
    size: "h-2 w-2",
    color: "bg-[#D4AF37]",
    radius: "inset-[-10px]",
    duration: 10,
    delay: 0,
    direction: 360,
  },
  {
    size: "h-1.5 w-1.5",
    color: "bg-[#F5EFE2]/90",
    radius: "inset-[-18px]",
    duration: 14,
    delay: 1.2,
    direction: -360,
  },
  {
    size: "h-2 w-2",
    color: "bg-[#D4AF37]/70",
    radius: "inset-[-28px]",
    duration: 18,
    delay: 0.6,
    direction: 360,
  },
  {
    size: "h-1 w-1",
    color: "bg-[#F5EFE2]/70",
    radius: "inset-[-36px]",
    duration: 24,
    delay: 1.8,
    direction: -360,
  },
];

export default function HeroSection() {
  return (
    <section className="px-6 py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="max-w-3xl">
          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#D4AF37] lg:text-7xl">
            Designs that shape brands, stories, and experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E1D1]/80">
            A curated showcase of branding, packaging, digital design,
            campaigns, and visual storytelling crafted with creativity and purpose.
          </p>

          <a
            href="#work"
            className="mt-8 inline-block rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#2E1065] transition hover:-translate-y-0.5 hover:bg-[#E6C76A]"
          >
            Explore Work
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#8A7EE4]/20 to-[#51CED9]/20 blur-3xl"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-[#D4AF37]/70 shadow-2xl shadow-[#D4AF37]/10 lg:h-80 lg:w-80"
            >
              <img
                src="/images/shreya.jpg"
                alt="Shreya R Shenoy illustration"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {orbitalDust.map((dust, index) => (
              <motion.div
                key={index}
                animate={{ rotate: dust.direction }}
                transition={{
                  duration: dust.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: dust.delay,
                }}
                className={`pointer-events-none absolute ${dust.radius}`}
              >
                <motion.div
                  animate={{
                    opacity: [0.25, 0.9, 0.25],
                    scale: [0.85, 1.15, 0.85],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: dust.delay,
                  }}
                  className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${dust.size} ${dust.color} blur-[1px]`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}