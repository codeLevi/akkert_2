export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="relative flex h-16 items-center px-6">
        {/* Left: logo (true left) */}
        <div className="w-1/3 flex items-center gap-2 text-sm">
            <span className="h-3 w-3 rounded-full bg-green-600" />
            <span>Welcome!</span>
        </div>

        {/* Center: menu */}
        <nav className="flex w-1/3 justify-center gap-8 text-base text-neutral-600">
            <a href="#home" className="hover:text-neutral-900">Home</a>
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#gallery" className="hover:text-neutral-900">Gallery</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>

        {/* Right: empty for balance */}
            <div className="w-1/3 flex justify-end gap-4 text-sm text-neutral-600">
                <span className="cursor-pointer hover:text-neutral-900">HU</span>
                <span className="cursor-pointer hover:text-neutral-900">RO</span>
                <span className="cursor-pointer hover:text-neutral-900">EN</span>
            </div>
        </div>

    </header>
  );
}
