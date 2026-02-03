"use client";

export default function Footer() {
  return (
    <div className="relative mt-32">
      <section className="relative my-16 flex justify-center mb-4">
        <div className="flex gap-10">
          <a
            href="https://www.instagram.com/akkertben/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="h-5 w-5 cursor-pointer opacity-60 hover:opacity-100"
            />
          </a>

          <a
            href="https://www.airbnb.com/rooms/1489020466031401643?locale=ro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Airbnb"
          >
            <img
              src="/icons/airbnb.svg"
              alt="Airbnb"
              className="h-5 w-5 cursor-pointer opacity-60 hover:opacity-100"
            />
          </a>

          <a
            href="https://www.facebook.com/akkert25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/icons/facebook.svg"
              alt="Facebook"
              className="h-5 w-5 cursor-pointer opacity-60 hover:opacity-100"
            />
          </a>
        </div>
      </section>

      {/* Footer line + text */}
      <footer className="border-t border-neutral-200 px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-neutral-500">
        © {new Date().getFullYear()} AKKERT
      </footer>
    </div>
  );
}
