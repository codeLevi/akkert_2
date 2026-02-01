export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="text-sm font-semibold tracking-wide">AKKERT</div>

        <nav className="flex gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-neutral-900">
            About
          </a>
          <a href="#" className="hover:text-neutral-900">
            Gallery
          </a>
          <a href="#" className="hover:text-neutral-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
