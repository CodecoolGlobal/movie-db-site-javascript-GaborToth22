import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  // Write your JavaScript code after this line

  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
   if(window.pageYOffset > 100){
     toTop.classList.add("active");
   }else{
     toTop.classList.remove("active");
   }
   });

  //dark and light mode
  document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
  const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
  const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
  
  let theme = "default";
  const root = document.querySelector(":root");
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");
  
  setDefault();
  
  container.addEventListener("click", setTheme);
  
  function setDefault() {
    root.style.setProperty(
      "--bs-dark",
      "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    );
    container.classList.remove("shadow-dark");
    container.classList.add("shadow-light");
    themeIcon.src = moon;
  }
  
  function setTheme() {
    switch (theme) {
      case "default":
        setDark();
        theme = "dark";
        break;
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  
  function setLight() {
    root.style.setProperty(
      "--bs-dark",
      "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
    document.body.classList.remove("dark-mode");
  }
  
  function setDark() {
    root.style.setProperty("--bs-dark", "#101930");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
    document.body.classList.add("dark-mode");
  }
  
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
    `<section id="borders" style="transition: transform 0.1 ease-in-out;">
    <br></br>
      <h1>${movie.title}</h1>
    <br></br>
      <div class="detalis">
        <p><strong>Director:</strong> ${directorArr}</p>
        <p><strong>Writers:</strong> ${writerArr}</p>
        <p><strong>Actors:</strong> ${actorArr}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Runtime:</strong> ${movie.runtime}</p>
        <p><strong>Story:</strong> ${movie.storyline || movie.description}</p>
        <p><strong>Genres:</strong> ${movie.genres}</p>
      </div>
      </section>
      <br></br>`)
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
      rootElement.insertAdjacentHTML("beforeend", `<section id="borders2"><br></br><h1>${actor.name}</h1><br></br><h4>${movieActorArr}<h4></section><br></br>`)
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
      rootElement.insertAdjacentHTML("beforeend", `<section id="borders2"><br></br><h1>${director.name}</h1><br></br><h4>${movieDirectorArr}<h4></section><br></br>`)
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
      rootElement.insertAdjacentHTML("beforeend", `<section id="borders2"><br></br><h1>${writer.name}</h1><br></br><h4>${movieWriterArr}<h4></section><br></br>`)
    }
  }
}else if(page === "genres"){
  for(let genre of data.genres){
    rootElement.insertAdjacentHTML("beforeend", `<div id="genres"><h1>${genre.name.toUpperCase()}</h1></div><br></br>`);
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
     `<section id="borders">
     <br></br>
      <h1>${movie.title}</h1>
      <br></br>
      <div class="detalis">
        <p><strong>Director:</strong> ${directorArr}</p>
        <p><strong>Writers:</strong> ${writerArr}</p>
        <p><strong>Actors:</strong> ${actorArr}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Runtime:</strong> ${movie.runtime}</p>
        <p><strong>Story:</strong> ${movie.storyline || movie.description}</p>
        <p><strong>Genres:</strong> ${movie.genres}</p>
      </div>
      </section>
      <br></br>`)
      }
    }
  }


  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
