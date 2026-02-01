import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6">
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
      <p className="mt-4 text-neutral-600">__ABOUT_TEXT__</p>

      <h1 className="text-xl font-medium tracking-tight">About</h1>
      
      <section id="gallery" className="mt-20">
        <Gallery />
      </section>

      <section id="contact" className="mt-20 max-w-3xl">
        <h1 className="text-xl font-medium tracking-tight">Contact</h1>
        <p className="mt-4 text-neutral-600">
          __CONTACT_TEXT__
        </p>
      </section>

    </section>
  );
}
