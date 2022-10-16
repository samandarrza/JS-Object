function Movie(name, imdb, date, image) {
    this.name = name;
    this.imdb = imdb;
    this.date = date;
    this.image = image;
}

let Interstellar = new Movie('Interstellar', '8.6', 2017, 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg');
let EdgeOfTomorrow = new Movie('Edge of Tomorrow', '7.9', 2014, 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg');
let Interstellar2 = new Movie('Interstellar', '8.6', 2017, 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg');
let EdgeOfTomorrow2 = new Movie('Edge of Tomorrow', '7.9', 2014, 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg');
let Interstellar3 = new Movie('Interstellar', '8.6', 2017, 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg');
let EdgeOfTomorrow3 = new Movie('Edge of Tomorrow', '7.9', 2014, 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg');
let Interstellar4 = new Movie('Interstellar', '8.6', 2017, 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg');
let EdgeOfTomorrow4 = new Movie('Edge of Tomorrow', '7.9', 2014, 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg');



let movies = [Interstellar,EdgeOfTomorrow,Interstellar2,EdgeOfTomorrow2,Interstellar3,EdgeOfTomorrow3,Interstellar4,EdgeOfTomorrow4];
let box = document.getElementById("box");
getMovies();


function getMovies() {
    box.innerHTML = "";
    for (const movie of movies) {
        box.innerHTML +=
        `<div class="col-md-2 pointer">
            <div class="m-2">
                <img class="w-100" src="${movie.image}" alt="">
                <div class="row">
                    <div class="col-md-8">
                        <h6 class="text-light">IMDB:<i class="las la-star"></i>${movie.imdb}</h6>
                    </div>
                    <div class="col-md-4">
                        <small class="text-light fw-bold">${movie.date}</small>
                    </div>
                    <h5 class="text-light">${movie.name}</h5>
                </div>
            </div>
            <hr class="smoke">
        </div>`
    }
}
let nameM = document.getElementById("inputName");
let imdbM = document.getElementById("inputImdb");
let rlsDate = document.getElementById("releaseDate");
let imgUrl = document.getElementById("imageUrl");
function CreateMovie() {
    movies.push(new Movie(nameM.value, imdbM.value, rlsDate.value, imgUrl.value))
    getMovies();
}