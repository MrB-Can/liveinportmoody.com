"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { OurListingGalleryImage } from "@/data/ourListings";

type ListingLightboxProps = {
  images: OurListingGalleryImage[];
  startIndex: number;
  onClose: () => void;
};

export function ListingLightbox({ images, startIndex, onClose }: ListingLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % images.length);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose]);

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        aria-label="Close photo viewer"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="absolute left-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
        {currentIndex + 1} / {images.length}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((i) => (i - 1 + images.length) % images.length);
        }}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 sm:left-4"
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((i) => (i + 1) % images.length);
        }}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 sm:right-4"
        aria-label="Next photo"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <div
        className="flex gap-2 overflow-x-auto bg-black/80 p-3"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`relative h-12 w-16 shrink-0 overflow-hidden rounded ${
              index === currentIndex ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="64px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
