import Image from "next/image";
import { Testimonials } from "../../../generated/prisma/client";
import { IoIosArrowDown } from "react-icons/io";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonials;
}) {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card-top">
        <div className="testimonials-card-img">
          <Image
            src={testimonial.avatarUrl || "/Testimonials/placeholder.png"}
            alt="avatar"
            width={120}
            height={120}
          />
        </div>
        <div className="testimonials-card-top-text">
          <h2 className="testimonials-card-top-name">{testimonial.name}</h2>
          <span className="testimonials-card-top-category">
            {testimonial.category}
          </span>
        </div>
      </div>
      <div className="testimonials-card-text">{testimonial.text}</div>
      <div className="testimonials-card-text-more">
        <p>Розгорнути</p>
        <IoIosArrowDown />
      </div>
    </div>
  );
}
