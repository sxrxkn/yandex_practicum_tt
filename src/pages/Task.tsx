import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/Task.css";
import { useState } from "react";

function Task() {
  const location = String(useLocation().pathname);
  const [isOpen, openAnswer] = useState(false);

  return (
    <>
      <Header location={location}></Header>
      <main>
        <section className="task">
          <h2>Задание</h2>
          <p>
            Напишите функцию, которая вернет значение факториала от параметра,
            используя цикл. Попробуйте решить это задание с помощью рекурсии.
          </p>
          <button
            className="task__button"
            onClick={() => {
              isOpen ? openAnswer(false) : openAnswer(true);
            }}>
            Посмотреть ответ
          </button>
          {isOpen && (
            <pre className="task__pre">
              <code className="task__code">
                const factorial = (num) ={">"} {"{"}
                <br />
                let res = 1<br />
                for (let i = 1; i {"<"}= num; i++) {"{"}
                <br />
                res *= i<br />
                {"}"}
                <br />
                return res
                <br />
                {"}"}
                <br />
                <br />
                const recFactorial = (num) ={">"} {"{"}
                <br />
                if (num === 0) return 1<br />
                return num * recFactorial(num - 1)
                <br />
                {"}"}
                <br />
              </code>
            </pre>
          )}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Task;
