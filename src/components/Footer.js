import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <hr />
              <li>
                <Link className="p-color" href="https://discord.gg/H4KvQyjzWe">
                  Showcase Discord
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/astrostudios">
                  Support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="/terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Maintained by: jxnithedev & {" "}
              <Link
                href="https://discord.gg/astrostudios"
                className="h-color no-decoration"
              >
                Astro Studios
              </Link>
            </p>
            <p className="p-color">{year} &copy; All rights reserved!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="https://discord.gg/astrostudios">
              Support
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://discord.gg/astrostudios"
            >
              Get your license
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
