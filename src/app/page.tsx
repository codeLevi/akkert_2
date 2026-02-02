import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      {/* HERO: almost fullscreen width */}
      <section id="home" className="mx-auto w-[75vw] max-w-none px-0">
        <div className="relative overflow-hidden border bg-black mb-16">
          <img
            src="/hero.jpg"
            alt="AKKERT garden"
            className="h-[50vh] w-full object-cover opacity-90"
          />

          {/* Hero text overlay */}
          <div className="absolute bottom-8 left-14">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white/70">
              AKKERT
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white/60">
              Green oasis in the city.
            </p>

          </div>
        </div>
      </section>

      {/* CONTENT: normal width */}
      <section className="mx-auto max-w-6xl px-6">
        <h1 id="about" className="text-xl font-medium tracking-tight">
          About
        </h1>
        <p>AKKERT is a green oasis in the heart of Cluj.</p>
        <p>Perfect for birthdays, family celebrations, or a relaxing day in nature.</p>

        <section className="mt-20">
          <Gallery />
        </section>

        <section id="contact" className="mt-20 max-w-3xl">
          <h1 className="text-xl font-medium tracking-tight">Contact</h1>
          <p className="mt-4 text-neutral-600">__CONTACT_TEXT__</p>
        </section>
      </section>
    </>
  );
}
