import React, { Component } from "react";
import { Movies } from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f853d707&s=matrix")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ movies: data.Search })
      ); /* обращаемся к Seаrch чтобы получить данные фильма  */
  } /* выдача списка фильмов при рендеринге страницы */
  searchMovies = (str, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=f853d707&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }; /* Функция по поиску фильмов мы ее опускаем в пропс к saerch и меняет наш state  */
  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
