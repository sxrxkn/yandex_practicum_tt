import { Link } from "react-router-dom";
import "../styles/Header.css";

interface HeaderProps {
  location: string;
}

function Header({ location }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Знакомство со мной</h1>
        <nav>
          <ul className="header__nav">
            <li
              className={`${location === "/" ? "navigation_active-link" : ""}`}>
              <Link to={"/"}>Домашняя страница</Link>
            </li>
            <li
              className={`${
                location === "/task" ? "navigation_active-link" : ""
              }`}>
              <Link to={"/task"}>Задание</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
