"use client";
import Image from "next/image";
import type { Testimonials } from "../../../generated/prisma/client";
import "./style.css";

export function Testimonials({
  testimonials,
}: {
  testimonials: Testimonials[];
}) {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-top">
          <h2 className="testimonials-title">
            Досвід співпраці, <br />
            який<span> має значення</span>
          </h2>
          <p className="testimonials-text">
            Клієнти про те, як вибудовується робота: від першого запиту до
            реалізованого результату і подальшого росту
          </p>
        </div>
      </div>
      <div className="container">
        <div className="testimonials-cards">
          {testimonials.map((el) => (
            <div className="testimonials-card" key={el.id}>
              <div className="testimonials-card-top">
                <div className="testimonials-card-img">
                  <Image
                    src={el.avatarUrl || "/Testimonials/placeholder.png"}
                    alt="avatar"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="testimonials-card-top-text">
                  <h2 className="testimonials-card-top-name">{el.name}</h2>
                  <span className="testimonials-card-top-category">
                    {el.category}
                  </span>
                </div>
              </div>
              <div className="testimonials-card-text">{el.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
