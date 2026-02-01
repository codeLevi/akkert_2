import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="overflow-hidden rounded-3xl border bg-black">
        <img
          src="/hero.jpg"
          alt="AKKERT garden"
          className="h-[60vh] w-full object-cover opacity-90"
        />
      </div>

      <h1 className="mt-8 text-2xl font-medium tracking-tight">
        AKKERT
      </h1>
      <p className="mt-2 text-neutral-600">
        A quiet garden for slow moments.
      </p>

      <Gallery />
    </section>
  );
}
