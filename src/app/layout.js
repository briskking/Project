// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Header} from '../components/headerComp/header.js/'
import {Footer} from '../components/footerComp/footer.js/' 
// import Electro from "next/font/local";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
        className={`antialiased`}
      >
<div>
        <Header />

        
        <main className="flex-grow">{children}</main>

        <Footer/>


</div>


      </body>
    </html>
  );
}
