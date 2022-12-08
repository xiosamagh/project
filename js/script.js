"use strict";





let number0fFilms;

function start() {
    number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();
const personalMovieDB = {
    count : number0fFilms,
    movies : {},
    actors: {},
    genres : [],
    privat : false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt("Один их последних просмотренных фильмов?", "");
        const average = prompt("На сколько оцените его?", "");
    
        if ((lastFilm.length != 0 && average.length != 0) && (lastFilm.length < 50) && (lastFilm != null && average != null)) {
            personalMovieDB.movies[lastFilm] = average;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
        
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    }
    else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}
writeYourGenres();




console.log(personalMovieDB);

