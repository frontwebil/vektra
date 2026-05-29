import Image from "next/image";
import "./style.css";
import "./layout.css";
import { GoArrowUpRight } from "react-icons/go";
import { useIsOpenForm } from "@/Zustand/isOpenForm";

export function Hero() {
  const { openContactForm } = useIsOpenForm();

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden>
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/Hero/bg.webm" type="video/webm" />
        </video>
        <div className="hero-bg-overlay" />
      </div>
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
        <div className="hero-top">
          <div className="hero-absolute-text-card hero-top-1">Дизайн</div>
          <div className="hero-absolute-text-card hero-top-2">Розробка</div>
          <Image
            src={"/Hero/shape.webp"}
            width={180}
            height={180}
            alt=""
            className="hero-top-img"
          />
        </div>
        <div className="hero-main-content">
          <h1>
            Створюємо <span className="hero-main-content-span-1"></span> <br />
            <span className="hero-main-content-span-2"></span> цифрові продукти{" "}
            <br />
            які{" "}
            <span className="hero-main-content-italic">задають напрямок</span>
          </h1>
          <h2>Дизайн, розробка та SEO як єдина система росту бізнесу</h2>
          <div
            className="hero-main-content-button"
            onClick={() => openContactForm()}
          >
            <button
              className="hero-main-content-button-learn-services"
              data-cursor="hover"
            >
              Ознайомитись із послугами
            </button>
            <div className="hero-main-button-icon" data-cursor="hover">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-absolute-text-card hero-bottom-1">Зростання</div>
          <div className="hero-absolute-text-card hero-bottom-2">
            Масштабування
          </div>
          <Image
            src={"/Hero/shape-2.webp"}
            width={180}
            height={180}
            alt=""
            className="hero-bottom-img"
          />
        </div>
      </div>
    </section>
  );
}
