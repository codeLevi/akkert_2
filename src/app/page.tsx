import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl border bg-black">
        <img
          src="/hero.jpg"
          alt="AKKERT garden"
          className="h-[60vh] w-full object-cover opacity-90"
        />

        {/* Hero text overlay */}
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-2xl font-medium tracking-tight">AKKERT</h1>
          <p className="mt-1 text-sm text-white/80">
            Green oasis in the city.
          </p>
        </div>
      </div>

      <h1 id="about" className="text-xl font-medium tracking-tight">About</h1>
      
      <section className="mt-20">
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
