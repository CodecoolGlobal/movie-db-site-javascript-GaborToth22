import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  // Write your JavaScript code after this line
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");
 
if(page === "movies" || page === ""){
  data.movies.forEach(movie=>{
    let writerArr = [];
    let actorArr = [];
    let directorArr = [];

    for(let writer of data.professionals){
      for(let bb of movie.writers){
        if(bb === writer.id){
          writerArr.push(writer.name);
        }
      }
    }
    for(let actor of data.professionals){
      for(let bb of movie.actors){
        if(bb === actor.id){
          actorArr.push(actor.name);
        }
      }
    }
    for(let director of data.professionals){
      for(let bb of movie.directors){
        if(bb === director.id){
          directorArr.push(director.name);
        }
      }
    }
    rootElement.insertAdjacentHTML("beforeend",
     `<section>
      <h1>${movie.title}</h1>
      <div class="detalis">
        <p><strong>Director:</strong> ${directorArr}</p>
        <p><strong>Writers:</strong> ${writerArr}</p>
        <p><strong>Actors:</strong> ${actorArr}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Runtime:</strong> ${movie.runtime}</p>
        <p><strong>Story:</strong> ${movie.storyline || movie.description}</p>
        <p><strong>Genres:</strong> ${movie.genres}</p>
      </div>
      </section>`)
  })
}else if(page === "actors"){
  for(let actor of data.professionals){
    if(actor.roles.includes("actor")){
      let movieActorArr = []
      for(let movie of data.movies){
        for(let actor2 of movie.actors)
        if(actor.id === actor2){
          movieActorArr.push(movie.title)
        }
      }
      rootElement.insertAdjacentHTML("beforeend", `<section><h2>${actor.name}</h2><h4>${movieActorArr}<h4></section>`)
    }
  }
}else if(page === "directors"){
  for(let director of data.professionals){
    if(director.roles.includes("director")){
      let movieDirectorArr = []
      for(let movie of data.movies){
        for(let director2 of movie.directors)
        if(director.id === director2){
          movieDirectorArr.push(movie.title)
        }
      }
      rootElement.insertAdjacentHTML("beforeend", `<section><h2>${director.name}</h2><h4>${movieDirectorArr}<h4></section>`)
    }
  }
}else if(page === "writers"){
  for(let writer of data.professionals){
    if(writer.roles.includes("writer")){
      let movieWriterArr = []
      for(let movie of data.movies){
        for(let writer2 of movie.writers)
        if(writer.id === writer2){
          movieWriterArr.push(movie.title)
        }
      }
      rootElement.insertAdjacentHTML("beforeend", `<section><h2>${writer.name}</h2><h4>${movieWriterArr}<h4></section>`)
    }
  }
}else if(page === "genres"){
  for(let genre of data.genres){
    rootElement.insertAdjacentHTML("beforeend", `<div id="genres"><h1>${genre.name.toUpperCase()}</h1></div>`);
    let moviesArr = [];
    for(let movie of data.movies){
      if(movie.genres.includes(genre.name)){
        moviesArr.push(movie)
      }
    }console.log(moviesArr)
    for(let movie of moviesArr){
    let writerArr = [];
    let actorArr = [];
    let directorArr = [];

    for(let writer of data.professionals){
      for(let bb of movie.writers){
        if(bb === writer.id){
          writerArr.push(writer.name);
        }
      }
    }
    for(let actor of data.professionals){
      for(let bb of movie.actors){
        if(bb === actor.id){
          actorArr.push(actor.name);
        }
      }
    }
    for(let director of data.professionals){
      for(let bb of movie.directors){
        if(bb === director.id){
          directorArr.push(director.name);
        }
      }
    }
    rootElement.insertAdjacentHTML("beforeend",
     `<section>
      <h3>${movie.title}</h3>
      <div class="detalis">
        <p><strong>Director:</strong> ${directorArr}</p>
        <p><strong>Writers:</strong> ${writerArr}</p>
        <p><strong>Actors:</strong> ${actorArr}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Runtime:</strong> ${movie.runtime}</p>
        <p><strong>Story:</strong> ${movie.storyline || movie.description}</p>
        <p><strong>Genres:</strong> ${movie.genres}</p>
      </div>
      </section>`)
      }
    }
  }


  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
