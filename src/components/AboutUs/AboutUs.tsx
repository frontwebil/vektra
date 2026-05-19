import Link from "next/link";
import "./AboutUs.css";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-top">
          <div className="about-us-left-text">
            Занурення в продукт замість формального підходу
          </div>
          <div className="about-us-title">
            <h2>
              Працюємо глибше, ніж просто «зробити сайт» Створюємо цифрові
              продукти, які{" "}
              <span className="about-us-title-blue-text">
                стають частиною маркетингу
              </span>{" "}
              і{" "}
              <span className="about-us-title-blue-text">
                дають конкурентну перевагу
              </span>
            </h2>
            <Link href={"/"} className="about-us-title-see-more">
              <p>Переглянути послуги</p>
              <GoArrowUpRight />
            </Link>
          </div>
          <div className="about-us-right-text">
            Рішення, які обирають користувачі та які дають результат
          </div>
        </div>
        <div className="about-us-cards">
          <div className="about-us-card">
            <div className="about-us-card-img">
              <div className="about-us-card-img-text-block about-us-card-text-first-1">
                Побажання
              </div>
              <div className="about-us-card-img-text-block about-us-card-text-first-2">
                Унікальність
              </div>
              <div className="about-us-card-img-text-block about-us-card-text-first-3">
                Ніша
              </div>
              <Image
                src={"/shape/shape-1.png"}
                width={300}
                height={300}
                alt="shape"
              />
            </div>
            <h3 className="about-us-card-title">30+ успішних проєктів</h3>
            <p className="about-us-card-text">
              Реалізовані сайти в різних нішах — від запуску до масштабування
            </p>
          </div>
          <div className="about-us-card center">
            <div className="about-us-card-img">
              <div className="about-us-card-img-text-block about-us-card-text-center-1">
                Досвід
              </div>
              <div className="about-us-card-img-text-block about-us-card-text-center-2">
                <Image
                  src={"/shape/code.svg"}
                  width={50}
                  height={50}
                  alt="</>"
                />
              </div>
              <div className="about-us-card-img-text-block about-us-card-text-center-3">
                Зростання
              </div>
              <Image
                src={"/shape/shape-2.png"}
                width={300}
                height={300}
                alt="shape"
              />
            </div>
            <h3 className="about-us-card-title center">5 років</h3>
            <p className="about-us-card-text center">
              У дизайні, розробці та створенні продуктів, що працюють на бізнес
            </p>
          </div>
          <div className="about-us-card">
            <div className="about-us-card-img">
              <div className="about-us-card-img-text-block about-us-card-text-last-1">
                Підхід
              </div>

              <div className="about-us-card-img-text-block about-us-card-text-last-2">
                Комунікація
              </div>
              <Image
                src={"/shape/shape-3.png"}
                width={300}
                height={300}
                alt="shape"
              />
            </div>
            <h3 className="about-us-card-title">90% клієнтів повертаються</h3>
            <p className="about-us-card-text">
              Результат, який формує довгострокову співпрацю
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
