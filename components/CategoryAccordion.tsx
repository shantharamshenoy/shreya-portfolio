"use client";

import { useState } from "react";
import { categories, type PortfolioItem } from "@/content/categories";
import ImageCarousel from "@/components/ImageCarousel";

// type PortfolioImage = {
//   type: "image" | "video";
//   src: string;
//   alt: string;
// };

// type PortfolioItem = {
//   title: string;
//   description: string;
//   media: PortfolioImage[];
// };

export default function CategoryAccordion() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="work" className="px-6 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Selected categories
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#F5EFE2] lg:text-5xl">
              Design Work That Solves, Communicates, and Connects
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#E8E1D1]/75">
            A curated selection of projects across branding, packaging, and digital design - each crafted with a focus on clarity, impact, and real-world application.
          </p>
        </div>

        <div className="space-y-5">
          {categories.map((category, index) => (
            <details
              key={category.slug}
              className="group overflow-hidden rounded-[2rem] border border-[#D4AF37]/40 bg-[#BFA46A] shadow-xl shadow-[#D4AF37]/10"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none px-6 py-6 lg:px-8 lg:py-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-3 w-3 rounded-full bg-[#5B21B6]" />
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5B21B6]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-[#2E1065] lg:text-3xl">
                      {category.name}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#3B2A6D] lg:text-base">
                      {category.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-medium text-[#2E1065]">
                      {category.items.length} pieces
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#5B21B6]/80">
                      Click to expand
                    </p>
                  </div>
                </div>
              </summary>

              <div className="border-t border-[#D4AF37]/30 px-6 pb-6 pt-6 lg:px-8 lg:pb-8 lg:pt-8">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-medium text-[#3B2A6D]">
                    Gallery preview
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {category.items.map((item, i) => {
                    // const previewImage = item.images[0];

                    return (
                      <button
                        key={`${category.slug}-${i}`}
                        // type="button"
                        onClick={() => setSelectedItem(item)}
                        className="overflow-hidden rounded-[1.5rem] border border-[#D4AF37]/30 bg-[#C6AB73] text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2E1065]/10"
                      >
                        <div className="bg-[#C6AB73] p-4">
                          <ImageCarousel
                            media={item.media}
                            altPrefix={item.title}
                            className="flex h-72 items-center justify-center"
                            imageClassName="h-full w-full object-contain"
                          />
                        </div>

                        <div className="space-y-2 px-4 py-4">
                          <p className="text-sm font-semibold text-[#2E1065]">
                            {item.title}
                          </p>

                          <p className="text-sm leading-6 text-[#3B2A6D]">
                            {item.description}
                          </p>

                          {item.media.length > 1 && (
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5B21B6]/80">
                              {item.media.length} images
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[2rem] bg-[#111018] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              // type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-sm font-semibold text-white/80 transition hover:bg-white/10"
            >
              Close
            </button>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[1.5rem] bg-[#1A1730] p-6">
                <ImageCarousel
                  media={selectedItem.media}
                  altPrefix={selectedItem.title}
                  className="flex min-h-[300px] items-center justify-center"
                  imageClassName="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Portfolio Preview
                </p>

                <h3 className="mt-4 text-3xl font-bold text-[#F5EFE2]">
                  {selectedItem.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#E8E1D1]/80">
                  {selectedItem.description}
                </p>

                {selectedItem.media.length > 1 && (
                  <p className="mt-4 text-sm font-medium text-[#D4AF37]">
                    {selectedItem.media.length} images in this campaign
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}