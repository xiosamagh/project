"use strict";









const personalMovieDB = {
    count : 0,
    movies : {},
    actors: {},
    genres : [],
    privat : false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            
            if (genre === '' || genre == null) {
                console.log("Вы ввели некорректные данные");
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
            
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        
    }

};










console.log(personalMovieDB);

