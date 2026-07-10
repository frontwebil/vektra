import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { BsInstagram, BsTelegram, BsThreads } from "react-icons/bs";

export function ContactFormSection() {
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
                  href={"/"}
                  className="contact-form-section-content-row-title"
                >
                  vektra.it.agency@gmail.com
                </Link>
              </div>
              <div className="contact-form-section-content-row">
                <span>Номер телефону</span>
                <Link
                  href={"/"}
                  className="contact-form-section-content-row-title"
                >
                  + 38 ( 050 ) 052 - 15 - 71
                </Link>
              </div>
              <div className="contact-form-section-content-row">
                <span>Vektra у digital-просторі</span>
                <div className="contact-form-section-content-row-social">
                  <BsTelegram />
                  <BsInstagram />
                  <BsThreads />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
