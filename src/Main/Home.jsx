import { useState } from "react";
import { newFilms } from "./films";
import "./Main.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Фильмы 2025</h1>
      <form className="films-form" action="">
        <input
          value={searchTerm}
          onChange={handleSearch}
          className="films-search"
          type="text"
          placeholder="Поиск фильма"
        />
      </form>
      <div className="films">
        {newFilms
          .filter((elem) => {
            if (searchTerm.trim() === "") {
              return true;
            } else {
              return elem.name.toLowerCase().includes(searchTerm.toLowerCase());
            }
          })
          .map((e) => {
            return (
              <div key={e.id} className="films_container">
                <p className="films_text">
                  Название: <b>{e.name}</b>
                </p>
                <img className="films_img" src={e.link} alt="" />
                <p>
                  Автор: <b>{e.author}</b>
                </p>
                <p>
                  Релиз: <b>{e.releaseВate}</b>
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
}
