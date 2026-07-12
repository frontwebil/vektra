"use client";

import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { PiTelegramLogoLight, PiThreadsLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);

  const changePhoneNumber = (num: string) => {
    if (!/^\d*$/.test(num)) return;

    if (num.length > 9) return;
    setFormData({ ...formData, phoneNumber: num });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.phoneNumber.length !== 9) {
      toast.error("Введіть коректний номер телефону");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/leed/create-leed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Помилка при відправці");
      }

      toast("Дякуємо за звернення!", {
        description:
          "Ми отримали вашу заявку. Найближчим часом зв'яжемося з вами.",
      });

      setFormData({
        name: "",
        phoneNumber: "",
        text: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error ? error.message : "Сталася невідома помилка",
      );
    } finally {
      setLoading(false);
    }
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
            <form
              className="contact-form-section-content-right-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-section-content-right-form-row">
                <div className="contact-form-section-content-right-form-group">
                  <label htmlFor="section-name">Ім’я</label>
                  <input
                    type="text"
                    id="section-name"
                    required
                    placeholder="Як до Вас звертатись?"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="contact-form-section-content-right-form-group">
                  <label htmlFor="section-phone">Номер телефону</label>
                  <div className="contact-form-section-content-right-form-group-phone">
                    <label
                      htmlFor="section-phone"
                      className="contact-form-section-content-right-form-group-phone-label"
                    >
                      +380
                    </label>
                    <input
                      type="text"
                      id="section-phone"
                      placeholder="00-000-0000"
                      className="contact-form-section-content-right-form-group-phone-input"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => changePhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="contact-form-section-content-right-form-group">
                <label htmlFor="section-request">Запит</label>
                <textarea
                  name="text"
                  id="section-request"
                  placeholder="Розкажіть про ваш проєкт, задачу або ідею"
                  rows={5}
                  value={formData.text}
                  onChange={(e) =>
                    setFormData({ ...formData, text: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                style={{ opacity: `${loading ? "0.8" : "1"}` }}
                className="contact-form-section-content-right-form-button"
                data-cursor="hover"
              >
                {loading ? "Зачекайте ..." : "Обговорити проєкт"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
