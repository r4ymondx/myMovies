import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'


interface Movies {
  id: number;
  title: string;
  poster_path:string;
  release_date: string;
  overview: string;
}

function App() {

  const [movies, setMovies] = useState<Movies[]>([]);


  const apiKey = "7322b1051ef3a67850d2bd68e3e251d8"
  const popular = "https://api.themoviedb.org/3/movie/popular";
  
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = () => {
    axios.get(`${popular}?api_key=${apiKey}`).then((response) => {
      const result = response.data.results;
      setMovies(result);
      console.log(result);
    })
  }

  

 return (
    <>
      <header><h1 className='headerTitle' style={{ textAlign: 'center',
    width:'100%', color:'red', marginTop:'0%', marginBottom:'10%', fontFamily:'Protest Guerrilla',
  }}> RYFLIX
      </h1></header>
  <div className='App'>
 


    {movies.map((items) => (
      <div className="mt-2 mb-4 cardz" key={items.id} onClick={() => alert(items.overview + "Thank you for interacting")}>
        {items.poster_path &&  (
          <img className='poster' src= {`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={`${items.title} Poster`}/>
        )}
<h3>{items.title}</h3>
        <p>{items.release_date}</p>
       
      </div>
      
    ))}

  </div>
  </>
  )
}

export default App
