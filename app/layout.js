import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import BootstrapClient from '@/components/BootstrapClient.js';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="navbar navbar-expand-md navbar-dark py-0 d-flex">
          <div className="py-0 d-flex flex-grow-1 flex-md-grow-0">
            <a className="navbar-brand d-flex align-items-center justify-content-center w-100;" href="index.html">
              <img className="img-fluid" src="../public/vercel.svg" alt="uwu"/>
            </a>
            <div className="d-flex flex-grow-1 flex-md-grow-0">
              <button className="navbar-toggler w-100 rounded-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>       
          </div>        
          <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto d-flex justify-content-evenly align-items-center w-100 h-100">
              <li className="nav-item active w-100 h-100"><Link className="nav-link h-100 d-flex align-items-center justify-content-center" href="aliments">Aliments</Link></li>
              <li className="nav-item w-100 h-100">
                <Link className="nav-link h-100 d-flex align-items-center justify-content-center" href="scanner">Scanner</Link>
              </li>
              <li className="nav-item w-100 h-100"><Link className="nav-link h-100 d-flex align-items-center justify-content-center" href="menu3.html">Menu3</Link></li>
              <li className="nav-item w-100 h-100"><Link className="nav-link h-100 d-flex align-items-center justify-content-center" href="menu4.html">Menu4</Link></li>
              <li className="nav-item w-100 h-100"><Link className=" nav-link h-100 d-flex align-items-center justify-content-center" href="#"><img src="../public/vercel.svg" alt="uwu2" id="person-circle"/></Link></li>
            </ul>       
        </div>
      </nav>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
