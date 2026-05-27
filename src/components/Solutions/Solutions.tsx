import { GoArrowUpRight } from "react-icons/go";
import "./style.css";
import Image from "next/image";

export function Solutions() {
  return (
    <section className="solutions">
      <div className="container">
        <h3 className="solutions-title">
          <span style={{ color: "#193DEB" }}>Рішення</span>
          , що рухають <br /> бізнес вперед{" "}
          <span className="solutions-button" data-cursor="hover">
            <div className="solutions-button-text">Хочу такий результат</div>
            <div className="solutions-button-icon">
              <GoArrowUpRight />
            </div>
          </span>
        </h3>
        <p className="solutions-desctiprion">
          Реалізовані проєкти, де стратегія, дизайн і розробка працюють як
          єдиний вектор
        </p>

        <Image
          src={"/Solutions/shape.webp"}
          width={1000}
          height={1000}
          alt="Shape"
          className="solutions-shape"
        />

        <div className="solutions-cards">
          <div className="solution-card" data-cursor="hover">
            <div className="solution-card-arrow">
              <GoArrowUpRight />
            </div>
            <div className="solution-imgs">
              <Image
                src={"/Solutions/1/1.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
              <Image
                src={"/Solutions/1/2.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
              <Image
                src={"/Solutions/1/3.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
            </div>
            <div className="solution-description">
              <h3>E-commerce</h3>

              <div>
                <h2>Clave Shop</h2>
                <p>Повна розробка сайту та логотипу</p>
              </div>
            </div>
          </div>
          <div className="solution-card" data-cursor="hover">
            <div className="solution-card-arrow">
              <GoArrowUpRight />
            </div>
            <div className="solution-imgs">
              <Image
                src={"/Solutions/1/1.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
              <Image
                src={"/Solutions/1/2.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
              <Image
                src={"/Solutions/1/3.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
            </div>
            <div className="solution-description">
              <h3>E-commerce</h3>

              <div>
                <h2>Clave Shop</h2>
                <p>Повна розробка сайту та логотипу</p>
              </div>
            </div>
          </div>
          <div className="solution-card" data-cursor="hover">
            <div className="solution-card-arrow">
              <GoArrowUpRight />
            </div>
            <div className="solution-imgs">
              <Image
                src={"/Solutions/1/1.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
              <Image
                src={"/Solutions/1/2.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
              <Image
                src={"/Solutions/1/3.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
            </div>
            <div className="solution-description">
              <h3>E-commerce</h3>

              <div>
                <h2>Clave Shop</h2>
                <p>Повна розробка сайту та логотипу</p>
              </div>
            </div>
          </div>
          <div className="solution-card" data-cursor="hover">
            <div className="solution-card-arrow">
              <GoArrowUpRight />
            </div>
            <div className="solution-imgs">
              <Image
                src={"/Solutions/1/1.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
              <Image
                src={"/Solutions/1/2.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
              <Image
                src={"/Solutions/1/3.png"}
                width={1000}
                height={2000}
                alt="Clave"
                className="solution-img"
              />
            </div>
            <div className="solution-description">
              <h3>E-commerce</h3>

              <div>
                <h2>Clave Shop</h2>
                <p>Повна розробка сайту та логотипу</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
