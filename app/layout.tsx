import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " z-[-1] relative"}>
        <div className="min-h-screen w-full from bg-dot-gray-500/[0.45] z-[-1]  relative flex items-center justify-center">
          <main className="w-[35rem] max-w-[90%] mt-[8rem]">{children}</main>
        </div>
      </body>
    </html>
  );
}
