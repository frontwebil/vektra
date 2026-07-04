"use client";

import type { Testimonials as TestimonialsType } from "../../../generated/prisma/client";
import "./style.css";
import { TestimonialCard } from "./TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialsType[];
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

      <div className="testimonials-slider">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((el) => (
            <SwiperSlide key={el.id}>
              <TestimonialCard testimonial={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
