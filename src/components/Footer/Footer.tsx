import Link from "next/link";
import "./style.css";
import { PiTelegramLogoLight, PiThreadsLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-nav">
            <div className="footer-top-nav-group">
              <h3 className="footer-top-nav-group-title">Навігація</h3>

              <div className="footer-top-nav-group-links">
                <div className="footer-top-nav-group-column">
                  <Link
                    href="/"
                    className="footer-top-nav-group-link"
                    data-cursor="hover"
                  >
                    Головна
                  </Link>

                  <Link
                    href="#about-us"
                    className="footer-top-nav-group-link"
                    data-cursor="hover"
                  >
                    Про нас
                  </Link>
                  <Link
                    href="#services"
                    className="footer-top-nav-group-link"
                    data-cursor="hover"
                  >
                    Послуги
                  </Link>
                </div>

                <div className="footer-top-nav-group-column">
                  <Link
                    href="/cases"
                    className="footer-top-nav-group-link"
                    data-cursor="hover"
                  >
                    Кейси
                  </Link>

                  <Link
                    href="/contacts"
                    className="footer-top-nav-group-link"
                    data-cursor="hover"
                  >
                    Контакти
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-top-contacts">
            <h3 className="footer-top-nav-group-title">Контакти</h3>

            <div className="footer-top-contact-group">
              <Link
                href="mailto:vektra.it.agency@gmail.com"
                className="footer-top-contact-group-link"
                data-cursor="hover"
              >
                vektra.it.agency@gmail.com
              </Link>

              <Link
                href="tel:+380500521571"
                className="footer-top-contact-group-link"
                data-cursor="hover"
              >
                +38 (050) 052-15-71
              </Link>
            </div>

            <div className="footer-top-social-group">
              <Link
                href="https://t.me/iLyhaha1"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-top-social-group-link"
                data-cursor="hover"
              >
                <PiTelegramLogoLight className="footer-top-social-group-icon" />
              </Link>

              <Link
                href="https://www.instagram.com/vektra_agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-top-social-group-link"
                data-cursor="hover"
              >
                <FaInstagram className="footer-top-social-group-icon" />
              </Link>

              <Link
                href="https://www.threads.com/@vektra_agency"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-top-social-group-link"
                data-cursor="hover"
              >
                <PiThreadsLogo className="footer-top-social-group-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
