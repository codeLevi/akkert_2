"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const IMAGES = [
  "/gallery/01.jpg",
  "/gallery/02.jpg",
  "/gallery/03.jpg",
  "/gallery/04.jpg",
  "/gallery/05.jpg",
  "/gallery/06.jpg",
  "/gallery/07.jpg",
  "/gallery/08.jpg",
  "/gallery/09.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/16.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
];

type GalleryProps = {
  title: string;
  subtitle: string;
};

export default function Gallery({ title, subtitle }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const openAt = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + IMAGES.length) % IMAGES.length;
    });
  }, []);

  const next = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % IMAGES.length;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, next, prev]);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null);
    setTouchStartX(event.targetTouches[0].clientX);
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const deltaX = touchStartX - touchEndX;
    const threshold = 50;
    if (deltaX > threshold) next();
    if (deltaX < -threshold) prev();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="mt-16">
      <h1 id="gallery" className="text-2xl font-medium tracking-tight scroll-mt-24">{title}</h1>
      <p className="mt-3 text-base text-neutral-600">
        {subtitle}
      </p>

      <div className="mt-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {IMAGES.map((src, index) => (
            <button
              key={src}
              type="button"
              className="group relative overflow-hidden border border-neutral-200 bg-white"
              onClick={() => openAt(index)}
              aria-label="Open image"
            >
              <Image
                src={src}
                alt=""
                width={640}
                height={360}
                sizes="(min-width: 1024px) 16.6vw, (min-width: 640px) 33vw, 50vw"
                priority={index < 6}
                className="aspect-[16/9] w-full object-cover brightness-[0.9] contrast-[1.02] saturate-[0.95]"
              />
              <span className="film-grain" />
              <span className="pointer-events-none absolute inset-0 bg-black/5" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0" />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={IMAGES[activeIndex]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] cursor-pointer object-contain"
              onClick={next}
            />

            <button
              type="button"
              onClick={prev}
              className="fixed left-6 top-1/2 z-10 -translate-y-1/2 border border-neutral-200 bg-white/95 px-3 py-2 text-black"
              aria-label="Previous image"
            >
              {"<"}
            </button>

            <button
              type="button"
              onClick={next}
              className="fixed right-6 top-1/2 z-10 -translate-y-1/2 border border-neutral-200 bg-white/95 px-3 py-2 text-black"
              aria-label="Next image"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
