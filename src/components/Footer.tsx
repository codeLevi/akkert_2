export default function Footer() {
  return (
    <div className="relative mt-32">
      <section className="relative my-24 flex justify-center mb-4">
        <div className="flex gap-12">
          <a
            href="https://maps.app.goo.gl/BtVnYwvswRmLTVsb6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps"
          >
            <img src="/icons/maps.svg" alt="Maps" className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100" />
          </a>

          <a
            href="https://wa.me/40724508266"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100" />
          </a>

          <a
            href="https://www.airbnb.com/rooms/1489020466031401643?locale=ro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Airbnb"
          >
            <img src="/icons/airbnb.svg" alt="Airbnb" className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100" />
          </a>

          <a
            href="https://www.facebook.com/akkert25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100" />
          </a>

          <a
            href="https://www.instagram.com/akkertben/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100" />
          </a>
        </div>
      </section>


      {/* Footer line + text */}
      <footer className="border-t px-6 py-4 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} AKKERT
      </footer>
    </div>
  );
}
