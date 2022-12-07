


const number0fFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count : number0fFilms,
    movies : {},
    actors: {},
    genres : [],
    privat : false
};

const lastFilm = prompt("Один их последних просмотренных фильмов?", "");
const average = prompt("На сколько оцените его?", "");

const movies = {
    lastFilm: average
};