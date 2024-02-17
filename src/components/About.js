import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why buying InvBot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Updates</h4>
              <p className="p-color">
                InvBot is very updated. We accept suggestions in our Discord Server so our customers are 100% satisfied.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ 24/7 Support</h4>
              <p className="p-color">
                Get support either by our Support Team on our Discord server or ask our Community.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/terms" className="h-color no-decoration">
            Check out our Terms of Service &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">100+</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">100+</h4>
            <p className="p-color">Customers</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
