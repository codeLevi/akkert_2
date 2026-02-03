import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMessages, supportedLangs, type Lang } from "@/i18n";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const lang = supportedLangs.includes(resolvedParams.lang as Lang)
    ? (resolvedParams.lang as Lang)
    : "ro";
  const messages = getMessages(lang);

  return (
    <>
      <Header lang={lang} labels={messages.nav} welcome={messages.header.welcome} />
      <main style={{ paddingTop: 96, minHeight: "100vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
