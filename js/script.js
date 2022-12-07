"use strict";





const number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count : number0fFilms,
    movies : {},
    actors: {},
    genres : [],
    privat : false
};

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




console.log(personalMovieDB);

