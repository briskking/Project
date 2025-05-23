// import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {Header} from '../components/headerComp/header.js/'
import {Footer} from '../components/footerComp/footer.js/' 
import {Scroll} from '../components/scrollComp/scroll.js/'
import { Map} from '../components/map.js/'
// import { Inter } from "next/font/google";
// import Electro from "next/font/local";
// 
const ma = Montserrat ({
  variable: "--font-ma",
  weight: ["400", "700"],
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const electroRegular = Electro({
// src: "/fonts/Electro.woff",
// fontFamily: "Electro",
// fontWeight: 400,
// fontStyle: "normal",
// })

export const metadata = {
  title: "ballAZZ Events Spot",
  description: "Best Events spot in +234",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen ${ma.className}`}
      >
        <Header />

        
        <main className="flex-grow">{children}</main>

        <div className="pb-10"><Scroll/></div>

        <Map />

        <Footer/>





      </body>
    </html>
  );
}
