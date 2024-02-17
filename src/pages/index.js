import Head from "next/head";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Invoice Bot</title>
        <meta
          name="description"
          content="The official InvBot website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.discordapp.com/attachments/1175539566984306719/1207038083120242688/Money_Icon-modified.png?ex=65de30d0&is=65cbbbd0&hm=f23d73865c485265aa6a02b31e17be58e049412ab90eda468e123a0fe29aa29e&" />
      </Head>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
}
