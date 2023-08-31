import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/Home.css";

function Home() {
  const location = String(useLocation().pathname);

  return (
    <>
      <Header location={location}></Header>
      <main>
        <section className="photo">
          <h2>Мои школьные фотокарточки</h2>
          <div className="photo__content">
            <img
              className="photo__img"
              src={require("../assets/ph3.jpg")}
              width={"30%"}
              alt="Фото 1"
            />
            <img
              className="photo__img"
              src={require("../assets/ph2.jpg")}
              width={"30%"}
              alt="Фото 2"
            />
            <img
              className="photo__img"
              src={require("../assets/ph1.jpg")}
              width={"30%"}
              alt="Фото 3"
            />
          </div>
        </section>
        <section className="history">
          <h2>История любви</h2>
          <div className="history__content">
            <p>
              Когда я выбирал себе профессию, в первую очередь, я хотел избавить
              свою жизнь от рутины. Программирование, позволяет работать из
              любой точки планеты, не привязывая человека к одному месту на
              постоянной основе. Таким образом, открывается возможность
              путешествовать.
            </p>
            <p>
              Помимо этого, технологии программирования постоянно развиваются,
              что заставляет тебя тоже совершенствоваться. Многие задачи
              уникальны и постоянно сталкиваешься с чем-то новым и интересным. А
              также меня вдохновляют наглядные результаты моих работ. Вероятно,
              в совокупности данных факторов и заключается моя любовь к
              программированию.
            </p>
          </div>
        </section>
        <section className="video">
          <h2>Расскажу про CSS</h2>
          <div className="video__content">
            <video
              src={require("../assets/video.mp4")}
              width="70%"
              controls></video>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
