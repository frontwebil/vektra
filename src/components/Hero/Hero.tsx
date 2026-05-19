import Image from "next/image";
import "./style.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-layout">
        <div className="hero-layout-first-column">
          <div className="first"></div>
          <div></div>
          <div>
            <Image
              src={"/Hero/star-1.svg"}
              className="star-1"
              width={50}
              height={50}
              alt="."
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero-layout-main-column">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <Image
              src={"/Hero/star-2.svg"}
              className="star-2"
              width={50}
              height={50}
              alt="."
            />
          </div>
        </div>
        <div className="hero-layout-main-column">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero-layout-main-column">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero-layout-main-column">
          <div className="first"></div>
          <div>
            <Image
              src={"/Hero/star-3.svg"}
              className="star-3"
              width={50}
              height={50}
              alt="."
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero-layout-last-column">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div>
            <Image
              src={"/Hero/star-4.svg"}
              className="star-4"
              width={50}
              height={50}
              alt="."
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-top"></div>
        <div className="hero-main-content">
          <h1>
            Створюємо <span className="hero-main-content-span-1"></span> <br />
            <span className="hero-main-content-span-2"></span> цифрові продукти{" "}
            <br />
            які{" "}
            <span className="hero-main-content-italic">задають напрямок</span>
          </h1>
          <h2>Дизайн, розробка та SEO як єдина система росту бізнесу</h2>
          <div className="hero-main-content-buttons">
            <button className="hero-main-content-button-learn-more">
              Дізнатись більше
            </button>
            <button className="hero-main-content-button-learn-services">
              Ознайомитись із послугами
            </button>
          </div>
        </div>
        <div className="hero-bottom"></div>
      </div>
    </section>
  );
}
