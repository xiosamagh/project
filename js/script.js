"use strict";





const number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count : number0fFilms,
    movies : {},
    actors: {},
    genres : [],
    privat : false
};

const lastFilm = prompt("Один их последних просмотренных фильмов?", "");
const average = prompt("На сколько оцените его?", "");
const lastFilm1 = prompt("Один их последних просмотренных фильмов?", "");
const average1 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = average;
personalMovieDB.movies[lastFilm1] = average1;

console.log(personalMovieDB);

