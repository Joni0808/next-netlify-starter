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
          content="The official website from InvBot. You can view our TOS and more here!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.discordapp.com/attachments/1175539566984306719/1207038083120242688/Money_Icon-modified.png?ex=65de30d0&is=65cbbbd0&hm=f23d73865c485265aa6a02b31e17be58e049412ab90eda468e123a0fe29aa29e&" />
      
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invbot.astro-studios.xyz" />
        <meta property="og:title" content="Invoice Bot" />
        <meta property="og:description" content="The ultimate solution for managing your invoices efficiently. Discover InvBot today! View the TOS and the newest Informations here!" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1175539566984306719/1208379302127870033/Money_Icon.gif?ex=65e311ec&is=65d09cec&hm=54dc6078d69f96a60840b3f6508b342e4f79c393abbfd9be7c768d1f39941b53&" />

      </Head>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
}
