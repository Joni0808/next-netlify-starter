import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Invoice Bot</h1>
        <h2 className="showcase-header-text h-color">
          The Bot you need to make money easier!
        </h2>
        <p className="showcase-para p-color">
          InvBot is one of the best Invoice Bot on the market.
        </p>

        <span className="p-color">Manage your Invoices easier with InvBot</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://builtbybit.com/resources/invbot-invoices-over-discord.39673/">
              Buy now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/astrostudios">
              Get support!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
