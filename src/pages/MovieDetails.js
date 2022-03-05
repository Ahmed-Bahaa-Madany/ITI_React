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
        <div> MovieDetails : {params.id} , {movie.title} </div>
    )
}