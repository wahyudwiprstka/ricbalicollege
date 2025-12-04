import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsappPopup from "./components/WhatsappPopup";
import { NextIntlClientProvider } from "next-intl";
import { defaultLocale } from "@/i18n/i18n";
import "./globals.css";
import { cookies } from "next/headers";

export const metadata = {
  title: "RIC Bali",
  description: "Website resmi Rising International College Bali",
  icons: {
    icon: "/img/ricb.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || defaultLocale;

  const translation = (await import(`@/app/locales/${locale}/translation.json`))
    .default;
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={translation}>
          <Navbar />
          <main className="flex-1 mt-22">{children}</main>
          <WhatsappPopup />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
