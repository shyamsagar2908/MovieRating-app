import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom"
import Cards from "../card/card"


const Searched = () => {
    const loaction=useLocation();
    const [movieName,setmovieName]=useState("");
    const [movieList, setMovieList] = useState([])
    
setTimeout(()=>{ 
setmovieName(loaction.state?.id.results)
},500)

    useEffect(()=>{
       setMovieList(movieName);             
    },[movieName])
   
    return (
        <div className="movie__list">
            <h2 className="list__title">Search page</h2>
            <div className="list__cards">
                {
                   movieList?.length
                   ? movieList.map((movie,index)=><Cards key={index} movie={movie}/>):"No Movie Search"
                }
            </div>
        </div>
    )
}

export default Searched