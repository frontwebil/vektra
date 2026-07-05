"use client";

import { useIsOpenForm } from "@/Zustand/isOpenForm";
import { GoArrowUpRight } from "react-icons/go";
import "./style.css";
import Image from "next/image";
import { FaqAccordeon } from "./FaqAccordeon";

export function Faq() {
  const { openContactForm } = useIsOpenForm();

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-left">
          <div className="faq-left-text">
            <h2 className="faq-left-text-title">
              Перед стартом <br />
              завжди є <span>питання</span>
            </h2>
            <p className="faq-left-text-text">
              Коли зʼявляється ідея продукту або потреба в редизайні, перше — це
              не дизайн і не код. Це сумніви.
            </p>
            <span
              className="faq-button"
              data-cursor="hover"
              onClick={() => openContactForm()}
            >
              <div className="faq-button-text">Залишились питання?</div>
              <div className="faq-button-icon">
                <GoArrowUpRight />
              </div>
            </span>
            <div className="faq-left-caraculi">
              <div className="faq-left-caraculi-top">
                <Image
                  src={"/shape/shape-3.webp"}
                  width={170}
                  height={170}
                  alt="shape"
                />
                <p className="faq-left-caraculi-planka top-planka">
                  Без зайвих ризиків
                </p>
              </div>
              <div className="faq-left-caraculi-bottom">
                <Image
                  src={"/shape/shape-2.webp"}
                  width={315}
                  height={240}
                  alt="shape"
                />
                <p className="faq-left-caraculi-planka bottom-top-left-planka">
                  Чіткий вектор
                </p>
                <p className="faq-left-caraculi-planka bottom-left-planka">
                  Керований процес
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-right">
          <FaqAccordeon />
        </div>
      </div>
    </section>
  );
}
