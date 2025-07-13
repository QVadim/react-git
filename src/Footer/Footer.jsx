import "./Footer.css";
import gitHub from "../public/GitHub2.png";

export default function Footer() {
  const gitHubQVadim = "https://github.com/QVadim";
  const js = "https://learn.javascript.ru/";
  const wiki =
    "https://ru.wikipedia.org/static/images/footer/wikimedia-button.svg";

  return (
    <>
      <div className="footer">
        <a className="footer_link" href="#">
          О нас
        </a>
        <a className="footer_link" href={js}>
          Разработчикам
        </a>

        <a className="footer_link" href="https://ru.wikipedia.org/?l">
          <img className="footer_img" src={wiki} alt="" />
        </a>
        <a href={gitHubQVadim}>
          <img className="footer_img" src={gitHub} alt="Ссылка на мой gitHub" />
        </a>
      </div>
    </>
  );
}
