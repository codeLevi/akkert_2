"use client";

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


export default function Gallery() {
  return (
    <section className="mt-16">
      <h2 className="text-lg font-medium tracking-tight">Gallery</h2>
      <p className="mt-2 text-sm text-neutral-600">
        A few moments from AKKERT.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {IMAGES.map((src) => (
          <div
            key={src}
            className="group overflow-hidden rounded-2xl border bg-black"
          >
            <img
            src={src}
            alt=""
            className="aspect-square w-full cursor-pointer object-cover opacity-90 transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
