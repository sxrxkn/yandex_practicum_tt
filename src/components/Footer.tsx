import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>Сделано с любовью</p>
        <Link
          className="footer__link"
          target="_blank"
          to={"https://github.com/sxrxkn/yandex_practicum_tt"}
        >
          Перейти в репозиторий этого приложения
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
