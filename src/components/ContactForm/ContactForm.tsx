"use client";

import { useIsOpenForm } from "@/Zustand/isOpenForm";
import "./style.css";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const { isOpenContactForm, closeContactForm } = useIsOpenForm();
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

      closeContactForm();
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
    <div className={`ContactForm ${isOpenContactForm && "open"}`}>
      <div className="ContactForm-container">
        <div className="ContactForm-wrapper">
          <div className="ContactForm-close" onClick={() => closeContactForm()}>
            <IoCloseOutline />
          </div>
          <h2 className="ContactForm-title">
            <span style={{ color: "rgba(25, 61, 235, 1)" }}>Обговорімо</span>{" "}
            проєкт
          </h2>
          <p className="ContactForm-description">
            Залиште заявку — обговоримо ідею, задачі та створимо рішення, що
            працюватиме на результат
          </p>
          <form className="ContactForm-wrapper-form" onSubmit={handleSubmit}>
            <div className="ContactForm-wrapper-form-row">
              <div className="ContactForm-wrapper-form-group">
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
              <div className="ContactForm-wrapper-form-group">
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
            </div>
            <div className="ContactForm-wrapper-form-group">
              <label htmlFor="request">Запит</label>
              <textarea
                name="text"
                id="request"
                placeholder="Розкажіть про ваш проєкт, задачу або ідею"
                rows={4}
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
              ></textarea>
            </div>
            <button
              style={{ opacity: `${loading ? "0.8" : "1"}` }}
              className="ContactForm-wrapper-form-button"
              data-cursor="hover"
            >
              {loading ? "Зачекайте ..." : "Обговорити проєкт"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
