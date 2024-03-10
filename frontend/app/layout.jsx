import { Inter } from "next/font/google";
//import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import authReducer from "./Redux/store";
import { Providers } from "./Redux/Provider";
import "../styles/navbar.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-primary`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
