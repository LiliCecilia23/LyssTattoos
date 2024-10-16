import { Inter, Mansalva, Noto_Sans } from "next/font/google";
import {NextUIProvider} from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'
import "./globals.css";
import Logo from "../../public/LyssLogo.png";
import Arch from "../../public/darkarch.png";
import Nav from "../components/nav.js";
const inter = Inter({ subsets: ["latin"] });

const mansalva = Mansalva({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mansalva',
  weight: ['400']
});

const noto = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin']
});

export const metadata = {
  title: "Lyss Akemi Tattoos",
  description: "Booking website for Lyss Akemi Tattoos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto.variable} ${mansalva.variable}`}>
        <div style={{position: "fixed", top: 0, zIndex: 41}}>
          <Nav></Nav>
          <div>
            <Image alt="Archway" style={{marginTop: "-5px"}} src={ Arch }></Image>
          </div>
        </div>
        <NextUIProvider><main>{children}</main></NextUIProvider>
      </body>
    </html>
  );
}
