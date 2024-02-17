import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Terms of Service | Inv - Bot</title>
        <meta
          name="description"
          content="TOS page | The Page where you can find all the important informations to the Invoice Bot."
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
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              📝 | Terms of Service
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              ⚙️ | <strong>Before you read</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd><strong>Introduction</strong></kbd> -{" "}
                  <span className="p-color">This document outlines the Terms of Service (TOS) that govern the use of BuiltByBit products. <br></br>By accessing, purchasing, or using any BuiltByBit products, you agree to be bound by these terms.
                  If you do not agree with any part of these terms, you must not use our products.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              🔑 | <strong>License and Usage</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd><strong>License Requirement</strong></kbd> -{" "}
                  <span className="p-color">Like every other BuiltByBit product from us, InvBot require a valid license key for operation, except where the full source code has been purchased.<br></br>Without this key, products will not function, ensuring software integrity and authentication.</span>
                </li>
                <li>
                  <kbd><strong>License Key Usage and Restrictions</strong></kbd> -{" "}
                  <span className="p-color">License keys are unique and initially bound to two IP addresses and two hardware ID's (HWID), prohibiting their distribution or sharing.<br></br>To accommodate diverse user needs, additional IP addresses can be associated with a single license key upon purchase of an additional IP package.<br></br>This allows for flexibility in using our products across multiple locations or networks. Any attempt to bypass this restriction without the proper purchase constitutes a violation of these TOS.</span>
                </li>
                <li>
                  <kbd><strong>Right to Revoke License</strong></kbd> -{" "}
                  <span className="p-color">We reserve the right to revoke any license key if there is a failure to comply with these TOS or our rules on Discord, as part of our commitment to security.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              ⚖️ | <strong>Intellectual Property and Prohibitions</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd><strong>Prohibition of Unauthorized Distribution</strong></kbd> -{" "}
                  <span className="p-color">Unauthorized leakage, distribution, or resale of any BuiltByBit product code, including snippets, is strictly prohibited and will lead to legal action to protect our intellectual property.</span>
                </li>
                <li>
                  <kbd><strong>Resale of Products</strong></kbd> -{" "}
                  <span className="p-color">Reselling BuiltByBit products without explicit resell-rights is forbidden. Obtaining the resell-rights is possible in a Support Ticket in our Discord Server.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              🪛 | <strong>Amendments and Modifications</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd><strong>Modifications to Terms</strong></kbd> -{" "}
                  <span className="p-color">We reserve the right to modify these terms at any time without mentioning. Continued use of our products after such modifications constitutes agreement to the new terms.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              📜 | <strong>Warranty and Liability</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd><strong>No Warranties</strong></kbd> -{" "}
                  <span className="p-color">All products are provided "as is" without warranty of any kind, express or implied. We do not guarantee that our product will meet your requirements.</span>
                </li>
                <li>
                  <kbd><strong>Limitation of Liability</strong></kbd> -{" "}
                  <span className="p-color">Astro Studios shall not be liable for any damages arising out of or related to your use of our products beyond the original purchase price.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
              🔏 | <strong>Privacy and Data Protection</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd><strong>Data Use and Protection</strong></kbd> -{" "}
                  <span className="p-color">We are committed to protecting your privacy and ensuring the confidentiality of your data.<br></br>Information collected through the use of our products, including IP addresses and hardware IDs (HWIDs), is stored securely in a database that is not accessible to the public.<br></br>These data are collected solely for the purpose of verifying compliance with our licensing terms and to monitor who has access to our products.<br></br>Access to this sensitive information is strictly limited to the owners (Jxni and Astro), ensuring that, aside from these individuals, no one else can access these IP addresses or HWIDs. <br></br>This strict access control is part of our dedication to maintaining the security and privacy of our users.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb7" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb7">
              🚨 | <strong>Dispute Resolution</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd><strong>Resolution Process</strong></kbd> -{" "}
                  <span className="p-color">Any disputes arising under these TOS will be resolved through final and binding arbitration, except as set forth under applicable law.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb8" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb8">
              ✉️ | <strong>Contact Information</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd><strong>Where to contact?</strong></kbd> -{" "}
                  <span className="p-color">For questions regarding these TOS or if you need support, please contact us through our support channel on our Discord Server.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb9" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb9">
              ✅ | <strong>Agreement to Terms</strong>
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <span className="p-color">By using/buying the InvBot, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Legal actions will be pursued against those who violate these terms...</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
