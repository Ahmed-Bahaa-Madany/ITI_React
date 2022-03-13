import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { axiosInstance } from "../Network/axiosConfig";

export default function MovieDetails(){
    const params = useParams();
    const [movie, SetMovie] = useState([]);
    useEffect(() => {
        axiosInstance
        .get(`${params.id}?api_key=521babd36b4e171155f7d0cbc7032f74`)
        .then((res) => SetMovie(res.data))
        .catch((err) => console.log(err));
        }, []);
        console.log(movie)
    return(
        <>
            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,height:"94vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="container py-5">
                    <div className="py-5 row" style={{backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"5px"}}>
                        <div className="col-md-5">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" style={{height:"600px",width:"100%"}} className="ps-5"/>
                        </div>
                        <div className="col-md-7">
                            <p className="text-white px-5 pb-3 fs-1">{movie.title}</p>
                            <p className="text-white px-5 fs-5">{movie.overview}</p>
                            <p className="text-white p-5 fs-3">Rating : {movie.vote_average}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}