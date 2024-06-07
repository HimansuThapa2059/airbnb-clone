import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import RegisterModal from "@/components/modal/RegisterModal";
import Provider from "@/providers/provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <RegisterModal />
          <Navbar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
