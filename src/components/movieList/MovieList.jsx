import React,{useEffect,useState} from 'react'
import  Cards from "../card/card"
import "./MovieList.css"
import { useParams } from 'react-router-dom'


const MovieList = () => {
    const [movieList,setmovieList]=useState([])
    const {type}=useParams()
  
    useEffect(()=>{
        getData()
    },[])
   useEffect(()=>{
       getData()
   },[type])

  const getData=()=>{
      fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=10823f7402bc9c39a35a910b42ff8392&language=en-US`)
      .then(res=>res.json())
      .then(data=>setmovieList(data.results))
    }


  return (
    <div className='movie__list'>
        <h2 className='list__title'>{(type ? type :"POPULAR").toUpperCase()}</h2>
    <div className="list__cards">
        {
            movieList.map(movie=>(
            <Cards key={movie.id} movie={movie}/>

            ))
        }
    </div>
    </div>
  )
}

export default MovieList