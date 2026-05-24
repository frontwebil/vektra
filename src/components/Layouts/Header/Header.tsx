import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-logo">
          <Image
            src={"/Logo/Vektra-white.svg"}
            width={235}
            height={100}
            alt="Vektra"
          />
          <p className="header-logo-text">agency</p>
        </div>
        <nav className="header-nav">
          <Link href={""} className="header-nav-link">
            Про нас.
          </Link>
          <Link href={""} className="header-nav-link">
            Послуги.
          </Link>
          <Link href={""} className="header-nav-link">
            Кейси.
          </Link>
          <Link href={""} className="header-nav-link">
            Відгуки.
          </Link>
          <Link href={""} className="header-nav-link">
            Контакти.
          </Link>
          <p>/</p>
          <div className="header-nav-languague-switcher">
            <button className="header-nav-languague-switcher-button">UA</button>
            <button className="header-nav-languague-switcher-button">
              ENG
            </button>
          </div>
        </nav>
        <div className="header-button">
          <div className="header-button-text">Зв’язатись з нами</div>
          <div className="header-button-icon" >
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </header>
  );
}
