"use client";

import { useState } from "react";

type CarouselMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  media: CarouselMedia[];
  altPrefix?: string;
  className?: string;
  imageClassName?: string;
  showCounter?: boolean;
};

export default function ImageCarousel({
  media,
  altPrefix,
  className = "",
  imageClassName = "",
  showCounter = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultiple = media.length > 1;
  const current = media[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? media.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === media.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={`relative ${className}`}>
      {/* IMAGE */}
      {current.type === "image" && (
        <img
          src={current.src}
          alt={current.alt || `${altPrefix ?? "Portfolio"} ${currentIndex + 1}`}
          className={imageClassName}
        />
      )}

      {/* VIDEO */}
      {current.type === "video" && (
        <video
          src={current.src}
          className={imageClassName}
          controls
          muted
          playsInline
        />
      )}

      {/* NAVIGATION */}
      {hasMultiple && (
        <>
          <button
            // type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#111018]/70 px-3 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#111018]"
          >
            ‹
          </button>

          <button
            // type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#111018]/70 px-3 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#111018]"
          >
            ›
          </button>

          {showCounter && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#111018]/75 px-3 py-1 text-xs font-semibold tracking-[0.15em] text-white">
              {currentIndex + 1} / {media.length}
            </div>
          )}
        </>
      )}
    </div>
  );
}