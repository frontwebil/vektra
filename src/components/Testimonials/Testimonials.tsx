"use client";
import Image from "next/image";
import type { Testimonials } from "../../../generated/prisma/client";
import "./style.css";
import { TestimonialCard } from "./TestimonialCard";

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
            <TestimonialCard testimonial={el} key={el.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
