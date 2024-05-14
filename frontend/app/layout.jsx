"use client";
import { Inter } from "next/font/google";
//import "./globals.css";
import "../styles/scrollbar.css";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import authReducer from "./Redux/store";
import { Providers } from "./Redux/Provider";
import "../styles/navbar.css";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en " className="">
      <head>
        <link rel="icon" href="/mcfavicon.ico" />
      </head>
      <body className={`${inter.className} font-primary `}>
        <Providers>
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
