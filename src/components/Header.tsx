import Link from "next/link";
import type { Lang, Messages } from "@/i18n";

type HeaderProps = {
  lang: Lang;
  labels: Messages["nav"];
  welcome: string;
};

export default function Header({ lang, labels, welcome }: HeaderProps) {
  const baseHref = `/${lang}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95">
        <div className="flex h-16 items-center px-6">
        {/* Left: logo (true left) */}
        <div className="w-1/3 flex items-center gap-2 text-sm text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            <span>{welcome}</span>
        </div>

        {/* Center: menu */}
        <nav className="flex w-1/3 justify-center gap-8 text-sm uppercase tracking-[0.2em] text-neutral-500">
            <Link href={`${baseHref}#home`} className="hover:text-neutral-900">{labels.home}</Link>
            <Link href={`${baseHref}#about`} className="hover:text-neutral-900">{labels.about}</Link>
            <Link href={`${baseHref}#gallery`} className="hover:text-neutral-900">{labels.gallery}</Link>
            <Link href={`${baseHref}#contact`} className="hover:text-neutral-900">{labels.contact}</Link>
        </nav>

        {/* Right: empty for balance */}
            <div className="w-1/3 flex justify-end gap-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
                <Link href="/ro" className="hover:text-neutral-900" aria-label="Switch language to Romanian">RO</Link>
                <Link href="/hu" className="hover:text-neutral-900" aria-label="Switch language to Hungarian">HU</Link>
                <Link href="/en" className="hover:text-neutral-900" aria-label="Switch language to English">EN</Link>
            </div>
        </div>

    </header>
  );
}
