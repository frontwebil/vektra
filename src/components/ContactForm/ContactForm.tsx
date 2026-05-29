import { useIsOpenForm } from "@/Zustand/isOpenForm";
import "./style.css";
import { IoCloseOutline } from "react-icons/io5";

export function ContactForm() {
  const { isOpenContactForm, closeContactForm } = useIsOpenForm();
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
        </div>
      </div>
    </div>
  );
}
