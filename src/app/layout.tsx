import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "../components/icons";
import { Inter } from "next/font/google"
import { cn } from "@/helpers/cn";

const inter = Inter({ subsets: ["latin"]})


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
    <html lang="en">
      <body className={cn("bg-slate-890 text-slate-300",inter.className)}>
       <NavBar/>
        {children}
      </body>
    </html>
  );
}
