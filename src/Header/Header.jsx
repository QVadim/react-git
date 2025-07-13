import viteLogo from "../public/vite.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="header_nav">
          <img className="header_nav-logo" src={viteLogo} alt="" />
          <Link className="header_nav-link" to="/">
            Фильмы
          </Link>
          <Link className="header_nav-link" to="/main">
            Счетчик
          </Link>
          <Link className="header_nav-link" to="/mainStart">
            Погода
          </Link>
          <Link className="header_nav-link" to="/groceryСart">
            Корзина продуктов
          </Link>
          <div className="header_nav-BTN">
            <button type="button" className="header_nav-button">
              <Link className="header_nav-link" to="/formLogin">
                Вход
              </Link>
            </button>
            <button type="button" className="header_nav-button">
              <Link className="header_nav-link" to="/formRegistration">
                Регистрация
              </Link>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
