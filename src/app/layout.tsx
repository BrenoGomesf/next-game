import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "../components/icons";
import { Inter } from "next/font/google"
import { cn } from "@/helpers/cn";
import { getSession } from "@/helpers/session";

const inter = Inter({ subsets: ["latin"]})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();

  console.log(user)
  if(user && user.iat && user.exp){
    console.log("iat=", new Date(user.iat * 1000).toDateString());
    console.log("exp=", new Date(user.exp * 1000).toDateString());
  }
  return (
    <html lang="en">
      <body className={cn("bg-slate-890 text-slate-300",inter.className)}>
       <NavBar user={user}/>
        {children}
      </body>
    </html>
  );
}
