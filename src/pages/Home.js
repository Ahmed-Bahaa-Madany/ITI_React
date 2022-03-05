import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../Network/axiosConfig";

export default function Home(){
    const [movies, SetMovies] = useState([]);

    useEffect(() => {
    axiosInstance
        .get("popular?api_key=521babd36b4e171155f7d0cbc7032f74")
        .then((res) => SetMovies(res.data.results))
        .catch((err) => console.log(err));
    }, []);
    return (
        <>
        <div>
            users
            <ul>
            {movies.map((movie) => {
                return (
                <Link to={`/movie-details/${movie.id}`} key={movie.id}>
                    <li>{movie.title}</li>
                </Link>
                )
            })}
            </ul>
        </div>
        </>
    );
}