"use client";

import { GoArrowUpRight } from "react-icons/go";
import "./style.css";
import { useIsOpenForm } from "@/Zustand/isOpenForm";

export function NextStep() {
  const { openContactForm } = useIsOpenForm();

  return (
    <section className="next-step">
      <div className="container">
        <div className="next-step-wrapper">
          <h2 className="next-step-wrapper-title">
            Наступний крок — визначити{" "}
            <span style={{ fontStyle: "italic" }}>напрямок</span>
          </h2>
          <p className="next-step-wrapper-text">
            Розберемо задачу, оцінимо потенціал і запропонуємо рішення, яке
            реально працює — без зайвих дій і припущень
          </p>
          <span
            className="next-step-button"
            data-cursor="hover"
            onClick={() => openContactForm()}
          >
            <div className="next-step-button-text">Хочу такий результат</div>
            <div className="next-step-button-icon">
              <GoArrowUpRight />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
