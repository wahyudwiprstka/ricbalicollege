import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "RIC College",
  description: "Website resmi RIC College",
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
      </body>
    </html>
  );
}
