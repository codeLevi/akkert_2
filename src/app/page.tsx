import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      {/* HERO: minimal editorial */}
      <section id="home" className="mx-auto max-w-screen-2xl px-6 scroll-mt-24 reveal">
        <div className="relative overflow-hidden bg-neutral-100 mb-16">
          <img
            src="/hero.jpg"
            alt="Akkert garden"
            className="h-[52vh] w-full object-cover"
          />

          {/* Hero text overlay */}
          <div className="absolute bottom-8 left-8 reveal reveal-delay-1">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white/90">
              Akkert
            </h1>
            <p className="mt-3 text-lg md:text-xl text-white/70">
              Green oasis in the city.
            </p>

          </div>
        </div>
      </section>

      {/* CONTENT: normal width */}
      <section className="mx-auto max-w-screen-2xl px-6">
        <section id="about" className="scroll-mt-24 reveal reveal-delay-1">
          <h1 className="text-xl font-medium tracking-tight">About</h1>
          <p className="mt-3 text-base leading-7 text-neutral-600">Akkert is a green oasis in the heart of Cluj.</p>
          <p className="mt-2 text-base leading-7 text-neutral-600">Perfect for birthdays, family celebrations, or a relaxing day in nature.</p>
        </section>

        <section className="mt-20 reveal reveal-delay-2">
          <Gallery />
        </section>

        <section id="contact" className="mt-20 max-w-3xl scroll-mt-24 reveal reveal-delay-3">
          <h1 className="text-xl font-medium tracking-tight">Contact</h1>
          <div className="mt-3 flex flex-col gap-3 text-base text-neutral-700">
            <a
              href="https://wa.me/40724508266"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-neutral-900"
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
              <span>+40 724 508 266</span>
            </a>
            <a
              href="https://maps.app.goo.gl/BtVnYwvswRmLTVsb6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-neutral-900"
            >
              <img src="/icons/maps.svg" alt="Maps" className="h-5 w-5" />
              <span>Cluj-Napoca, str. Uliului, nr. 25</span>
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
