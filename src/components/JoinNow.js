import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Buy now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Buy our Invoice Bot now, for only 5${" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://builtbybit.com/resources/invbot-invoices-over-discord.39673/">
            BuiltByBit
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
