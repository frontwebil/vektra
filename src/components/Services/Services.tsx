import { PiHandPointingLight } from "react-icons/pi";
import "./style.css";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    letter: "A",
    title: "Стратегія & Брендинг",
    text: "Формування чіткого вектору розвитку бізнесу в онлайні — від позиціонування до цілісної системи бренду",
    tags: ["Неймінг", "Логотип", "Стратегія комунікації", "Брендбук"],
    link: "/",
  },
  {
    letter: "B",
    title: "Ведення соц. мереж",
    text: "Створення контенту та системного ведення соцмереж для підсилення бренду та залучення аудиторії",
    tags: ["Контент-стратегія", "Таргетована реклама", "SMM ведення", "Візуал"],
    link: "/",
  },
  {
    letter: "C",
    title: "UX/UI Дизайн & Редизайн",
    text: "Проєктування і редизайн цифрових продуктів із фокусом на зручність, конверсію та користувацький досвід",
    tags: [
      "Дослідження",
      "Зручний інтерфейс",
      "Унікальний дизайн",
      "Закриває задачі",
    ],
    link: "/",
  },
  {
    letter: "D",
    title: "Full-stack розробка",
    text: "Розробка сайтів і вебпродуктів будь-якої складності — від адаптивного front-end до серверної логіки та інтеграцій",
    tags: ["Front-end", "Back-end", "CMS інтеграції", "Розробка API"],
    link: "/",
  },
  {
    letter: "E",
    title: "Повне тестування",
    text: "Комплексна перевірка продукту перед запуском — від адаптивності та швидкодії до стабільності роботи",
    tags: ["QA Тестування", "Адаптивність", "Швидкість", "Якість"],
    link: "/",
  },
  {
    letter: "F",
    title: "Автоматизація процесів",
    text: "Впровадження цифрових рішень для автоматизації процесів, комунікації та роботи з клієнтськими даними",
    tags: ["CRM Системи", "API інтеграції", "Оптимізація процесів", "n8n"],
    link: "/",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">{`//`} Послуги</h2>
        <div className="services-container">
          {services.map((service, i) => (
            <Link
              href={service.link}
              className="service-row"
              key={service.letter}
              onMouseEnter={() => setActiveService(i)}
              data-cursor="hover"
            >
              <div
                className={`service-row-left ${activeService == i && "hovered"}`}
              >
                <div className="service-letter">[ {service.letter} ]</div>
                <div className="service-naming-container">
                  <div className="service-naming-tag first-naming-tag">
                    {service.tags[0]}
                  </div>
                  <div className="service-naming-tag second-naming-tag">
                    {service.tags[1]}
                  </div>
                  <div className="service-naming-tag fourth-naming-tag">
                    <div className="service-naming-tag third-naming-tag">
                      {service.tags[2]}
                    </div>
                    {service.tags[3]}
                  </div>
                  <h2 className="service-naming">{service.title}</h2>
                </div>
              </div>
              <div className="service-row-right">
                <PiHandPointingLight
                  className={`service-row-right-icon ${
                    activeService === i ? "hidden" : ""
                  }`}
                />
                <p
                  className={`service-row-right-text ${activeService == i && "hovered"}`}
                >
                  {service.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
