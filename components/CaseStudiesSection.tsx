"use client";

import { useState } from "react";
import { caseStudies, type CaseStudy } from "@/content/caseStudies";

export default function CaseStudiesSection() {
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

    return (
        <section id="case-studies" className="px-6 py-12 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                            Case Studies, Whitepapers & PoV Designs
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#F5EFE2] lg:text-5xl">
                            Explore detailed documents and visual case studies.
                        </h2>
                    </div>

                    <p className="max-w-xl text-base leading-8 text-[#E8E1D1]/75">
                        A curated collection of design documents, process narratives, and presentation-style case studies
                        that can be read directly within the portfolio.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {caseStudies.map((study) => (
                        <div
                            key={study.slug}
                            role="button"
                            tabIndex={0}
                            onClick={() => setSelectedCaseStudy(study)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setSelectedCaseStudy(study);
                                }
                            }}
                            className="cursor-pointer rounded-[1.75rem] border border-[#D4AF37]/30 bg-[#BFA46A] p-6 shadow-lg shadow-[#D4AF37]/10 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-40 items-center justify-center rounded-[1.25rem] border border-[#D4AF37]/20">
                                <div className="text-center">
                                    <div className="mb-5 overflow-hidden rounded-[1.25rem] border border-[#D4AF37]/20 bg-[#C6AB73]">
                                        <img
                                            src={study.thumbnail}
                                            alt={`${study.title} preview`}
                                            className="h-40 w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#2E1065]">
                                {study.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[#3B2A6D]">
                                {study.description}
                            </p>

                            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#5B21B6]/80">
                                Click to read
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCaseStudy && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 lg:p-6"
                    onClick={() => setSelectedCaseStudy(null)}
                >
                    <div
                        className="relative flex h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#111018] shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 lg:px-6">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                                    Case Study Viewer
                                </p>
                                <h3 className="mt-1 text-xl font-bold text-[#F5EFE2]">
                                    {selectedCaseStudy.title}
                                </h3>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedCaseStudy(null)}
                                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                            >
                                Close
                            </button>
                        </div>

                        <div className="flex-1 bg-[#1A1730]">
                            <iframe
                                src={selectedCaseStudy.file}
                                title={selectedCaseStudy.title}
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}