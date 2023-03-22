import * as fs from 'node:fs';

const movieDB = {
	professionals: [],
	movies: [],
  	genres: []
}

//write you code after this line
let persons = [];
try{
	const data = fs.readFileSync("data.json", "utf8")
	const mov = JSON.parse(data);
	findProfessionals(mov)
	moviesToMovieDB(mov)
	genresToMovieDB(mov)
		console.log(movieDB.genres)
	
	}catch (err){
		console.log(err)
	}
	
function findProfessionals(mov){	
let counter = 1;
for(const movies of Object.values(mov)){
	movies.forEach(element => {
		for(let writers of element.writers){
			if(!persons.includes(writers)){
				persons.push(writers);
				movieDB.professionals.push({
											id: counter,
											name: writers,
											roles: ["writer"]
				})
				counter++;
			}else{
				for(let i = 0; i < persons.length; i++){
					if(persons[i] === writers){
						if(!movieDB.professionals[i].roles.includes("writer")){
							movieDB.professionals[i].roles.push("writer");
						}										
					}
				}
			}
		}
		for(let actors of element.actors){
			if(!persons.includes(actors)){
				persons.push(actors);
				movieDB.professionals.push({
											id: counter,
											name: actors,
											roles: ["actor"]
				})
				counter++;
			}else{
				for(let i = 0; i < persons.length; i++){
					if(persons[i] === actors){
						if(!movieDB.professionals[i].roles.includes("actor")){
							movieDB.professionals[i].roles.push("actor");
						}										
					}
				}
			}
		}
		for(let directors of element.directors){
			if(!persons.includes(directors)){
				persons.push(directors);
				movieDB.professionals.push({
											id: counter,
											name: directors,
											roles: ["director"]
				})
				counter++;
			}else{
				for(let i = 0; i < persons.length; i++){
					if(persons[i] === directors){
						if(!movieDB.professionals[i].roles.includes("director")){
							movieDB.professionals[i].roles.push("director");
						}
					}
				}
			}
		}
	});
}
}
	
function moviesToMovieDB(mov){
	for(const movies of mov.movies){			
		for(let i = 0; i < movies.writers.length; i++){
			let writer = movies.writers[i]
			for(let idWriter of movieDB.professionals){
				if(writer === idWriter.name){
					movies.writers[i] = idWriter.id;
				}
			}
		}
		for(let i = 0; i < movies.actors.length; i++){
			let actor = movies.actors[i]
			for(let idActor of movieDB.professionals){
				if(actor === idActor.name){
					movies.actors[i] = idActor.id;
				}
			}
		}
		for(let i = 0; i < movies.directors.length; i++){
			let director = movies.directors[i]
			for(let idDirector of movieDB.professionals){
				if(director === idDirector.name){
					movies.directors[i] = idDirector.id;
				}
			}
		}
		movieDB.movies.push(movies)
	}
}

function genresToMovieDB(mov){
	let genres = [];
	let counter = 1;
	for(const movie of mov.movies){
		for(let genre of movie.genres){
			let genreLower = genre.toLowerCase()
			if(!genres.includes(genreLower)){
				genres.push(genreLower);
				movieDB.genres.push({id: counter,
									name: genreLower})
				counter++
			}
		}
	}
}


//write your code brefore this line

export {movieDB};
