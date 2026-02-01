export default function Footer() {
  return (
    <div className="relative mt-32">
      {/* Floating icons ABOVE footer line */}
      <div className="absolute top-0 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 gap-6 bg-white px-6">
        <img src="/icons/maps.svg" alt="Maps" className="h-6 w-6 opacity-70 hover:opacity-100" />
        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-6 w-6 opacity-70 hover:opacity-100" />
        <img src="/icons/airbnb.svg" alt="Airbnb" className="h-6 w-6 opacity-70 hover:opacity-100" />
        <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6 opacity-70 hover:opacity-100" />
        <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6 opacity-70 hover:opacity-100" />
      </div>

      {/* Footer line + text */}
      <footer className="border-t px-6 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} AKKERT
      </footer>
    </div>
  );
}
