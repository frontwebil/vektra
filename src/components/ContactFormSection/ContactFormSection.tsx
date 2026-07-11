"use client";

import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { PiTelegramLogoLight, PiThreadsLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    text: "",
  });

  const changePhoneNumber = (num: string) => {
    if (!/^\d*$/.test(num)) return;

    if (num.length > 9) return;
    setFormData({ ...formData, phoneNumber: num });
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-section-top">
          <h2 className="contact-form-section-top-title">
            Вектор <span>цифрового</span> <br /> <span>росту</span> починається
            тут
          </h2>
          <p className="contact-form-section-top-description">
            Реалізовуємо проєкти, де стратегія, дизайн і розробка працюють як
            єдиний вектор росту бізнесу
          </p>
        </div>
        <div className="contact-form-section-content">
          <div className="contact-form-section-content-left">
            <div className="contact-form-section-content-left-img">
              <Image
                src={"/shape/shape-4.webp"}
                alt="shape-1"
                width={400}
                height={300}
              />
            </div>
            <div className="contact-form-section-content-text">
              <div className="contact-form-section-content-row">
                <span>Email</span>
                <Link
                  href="mailto:vektra.it.agency@gmail.com"
                  className="contact-form-section-content-row-title"
                  data-cursor="hover"
                >
                  vektra.it.agency@gmail.com
                </Link>
              </div>

              <div className="contact-form-section-content-row">
                <span>Номер телефону</span>
                <Link
                  href="tel:+380500521571"
                  className="contact-form-section-content-row-title"
                  data-cursor="hover"
                >
                  +38 ( 050 ) 052 - 15 - 71
                </Link>
              </div>
              <div className="contact-form-section-content-row">
                <span>Vektra у digital-просторі</span>
                <div className="contact-form-section-content-row-social">
                  <Link
                    href="https://t.me/iLyhaha1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-form-section-content-row-social-link"
                    data-cursor="hover"
                  >
                    <PiTelegramLogoLight className="contact-form-section-content-row-social-icon" />
                  </Link>

                  <Link
                    href="https://www.instagram.com/vektra_agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-form-section-content-row-social-link"
                    data-cursor="hover"
                  >
                    <FaInstagram className="contact-form-section-content-row-social-icon" />
                  </Link>

                  <Link
                    href="https://www.threads.com/@vektra_agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-form-section-content-row-social-link"
                    data-cursor="hover"
                  >
                    <PiThreadsLogo className="contact-form-section-content-row-social-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-section-content-right">
            <form className="contact-form-section-content-right-form">
              <div className="contact-form-section-content-right-form-group">
                <label htmlFor="name">Ім’я</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Як до Вас звертатись?"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="contact-form-section-content-right-form-group">
                <label htmlFor="phone">Номер телефону</label>
                <div className="ContactForm-wrapper-form-group-phone">
                  <label
                    htmlFor="phone"
                    className="ContactForm-wrapper-form-group-phone-label"
                  >
                    +380
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="00-000-0000"
                    className="ContactForm-wrapper-form-group-phone-input"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => changePhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
