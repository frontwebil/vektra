import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const faqItems = [
  {
    letter: "A",
    question: "Скільки коштує розробка сайту або продукту?",
    answer:
      "Вартість залежить від складності, обсягу функціоналу та термінів. Простий лендінг і масштабний веб-застосунок — це різні бюджети. Після обговорення задачі ми формуємо прозорий кошторис, щоб ви розуміли, за що платите, ще до старту роботи.",
  },
  {
    letter: "B",
    question: "Скільки часу займає проект?",
    answer:
      "Лендінг або сайт-візитка — в середньому тиждень. Багатосторінковий сайт з кастомним дизайном — 3–5 тижнів. Складніші продукти з адмін-панеллю та інтеграціями — від 5 тижнів. Точні терміни обговорюємо під конкретну задачу.",
  },
  {
    letter: "C",
    question: "Що входить у процес роботи?",
    answer:
      "Аналіз задачі → дизайн-концепція → узгодження → верстка та розробка → тестування → запуск. На кожному етапі є зворотний зв’язок, щоб результат відповідав очікуванням. Ви бачите прогрес, а не просто чекаєте фінального результату.",
  },
  {
    letter: "D",
    question: "Чи можна замовити тільки дизайн або тільки розробку?",
    answer:
      "Так. Якщо у вас вже є готовий дизайн — реалізуємо його в коді. Якщо потрібен тільки дизайн без розробки — раді будемо допомогти. Головне, щоб задача була чітко сформульована.",
  },
  {
    letter: "E",
    question: "Які технології ви використовуєте?",
    answer:
      "Основний стек — Next.js, TypeScript, React та Tailwind CSS. Для бекенду — Prisma, PostgreSQL/MongoDB, REST API, Node.Js . Це сучасні, швидкі та масштабовані рішення, які дозволяють створювати продукти, що працюють стабільно та легко підтримуються.",
  },
  {
    letter: "F",
    question: "Що потрібно для старту проєкту?",
    answer:
      "Достатньо описати ідею чи задачу — навіть у кількох реченнях. Якщо є референси, приклади або ТЗ — чудово, це прискорить процес. Якщо немає — допоможемо все сформулювати на першому дзвінку.",
  },
  {
    letter: "G",
    question: "Чи надаєте підтримку після запуску?",
    answer:
      "Так. Після запуску допомагаємо з правками, оновленнями та технічною підтримкою. Якщо щось потребує змін або доповнень — завжди на зв’язку. Проєкт не закінчується деплоєм.",
  },
];

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
