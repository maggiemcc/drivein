const apiURL = "/json/comingSoon.json";

fetch(apiURL)
  .then((response) => response.json())
  .then((comingSoon) => {

    console.log(comingSoon);

/* eslint-disable no-undef */
    for (i = 0; i < comingSoon.length; i++) {

      // Movie Card
        let myMovieDiv = document.createElement("div");
        myMovieDiv.className = "movie";
        
        let myHeaderTag = document.createElement("div");
        myHeaderTag.className = "movie-screen-header";


        let myMovieName = document.createElement("h4");
        myMovieName.className = "movie-name";
        myMovieName.textContent = comingSoon[i].name;

        let myMovieImage = document.createElement("img");
        myMovieImage.src = comingSoon[i].photo;
        myMovieImage.className = "lazy";


        // Appending items
        document.getElementById('moviePosters').appendChild(myMovieDiv);
        myMovieDiv.appendChild(myMovieImage)
        myMovieDiv.appendChild(myMovieName);

        

        
        

    }
  });
