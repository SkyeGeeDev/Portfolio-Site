import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ScottBui.dev",
  description: "Personal site of Scott Bui / SkyeGee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}