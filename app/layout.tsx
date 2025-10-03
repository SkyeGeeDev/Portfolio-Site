import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SkyeGee's Garden",
  description: "Personal site of Scott Bui / SkyeGee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}