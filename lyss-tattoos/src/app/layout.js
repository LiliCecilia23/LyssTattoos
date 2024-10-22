import { Inter, Mansalva, Noto_Sans } from "next/font/google";
import {NextUIProvider} from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
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
      <Head>
        <title>Lyss Akemi Tattoos | Fineline, Realism, and Illustrative Designs in San Jose, CA</title>
        <meta
          name="description"
          content="Book flash and custom tattoo appointments with Lyss Akemi, resident artist at Ants Tattoo."
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta property="og:title" content="Lyss Akemi Tattoos" />
        <meta
          property="og:description"
          content="Book fineline, Realism, and Illustrative tattoos in San Jose, CA."
        />
      </Head>
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
