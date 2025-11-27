import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsappPopup from "./components/WhatsappPopup";
import "./globals.css";
import ParallaxProviderWrapper from "./providers/ParallaxProviderWrapper";

export const metadata = {
  title: "RIC Bali",
  description: "Website resmi Rising International College Bali",
  icons: {
    icon: "/img/ricb.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 mt-22">{children}</main>
        <WhatsappPopup />
        <Footer />
      </body>
    </html>
  );
}
