const Data = [];

const addtoData = (value,idx) => {
    Data.push({
        imgsrc: "https://image.tmdb.org/t/p/original" + value.poster_path,
        title: value.title
    });
}

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWZmMTAwYTFjOGRjNThlNTIxNTY4ZDM5MjYzOGYyYyIsInN1YiI6IjYzOTczOTMxYTBmMWEyMDBlMmFhYzhhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsFIJHkQqCqwlSXNzrzMXnJ0E0B5cFUQZGlltykEonE'
    }
  };    
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => response.results.map(addtoData))
    .catch(err => console.error(err));

console.log(Data);
export default Data;

