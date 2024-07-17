import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GridBackground from "./components/ui/GridBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Kenny Aragon Siahaan  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " z-[-1] relative"}>
        <GridBackground>
          <main className="w-[35rem] max-w-[90%] mt-[8rem]">{children}</main>
        </GridBackground>
      </body>
    </html>
  );
}
