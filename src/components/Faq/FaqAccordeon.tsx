import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { faqItems } from "@/data/faq";


export function FaqAccordeon() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="faq-accordeon">
      {faqItems.map((el, i) => {
        const isOpen = activeIndex === i;

        return (
          <div className="faq-accordeon-row" key={i}>
            <button
              className="faq-accordeon-row-top"
              onClick={() => setActiveIndex(isOpen ? null : i)}
              data-cursor="hover"
            >
              <div className="faq-accordeon-row-left">
                <span className="faq-accordeon-row-left-letter">
                  [ {el.letter} ]
                </span>

                <h3 className="faq-accordeon-row-left-question">
                  {el.question}
                </h3>
              </div>

              <div
                className={`faq-accordeon-row-right ${isOpen ? "active" : ""}`}
              >
                <GoArrowUpRight />
              </div>
            </button>

            <div className={`faq-accordeon-answer ${isOpen ? "open" : ""}`}>
              <p>{el.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
