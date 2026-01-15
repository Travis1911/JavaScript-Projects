function my_Dictionary() {
    var movie = {
        Title: "The Avengers",
        Genre: "Action",
        Director: "Joss Whedon",
        Rating: "PG-13"
    };

    delete movie.Genre; // removes the Genre key-value pair

    document.getElementById("Dictionary").innerHTML = movie.Genre;
}
