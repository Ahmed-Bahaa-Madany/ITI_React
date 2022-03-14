import React, { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import{getMovieDetails} from "../store/actions/movies"


export default function MovieDetails(){
    let moviesDetails=useSelector((state)=>state.movies.movieDetails);
    const params = useParams();
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(params))
  }, []);
    return(
        <>
            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${moviesDetails.poster_path})`,height:"94vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="container py-5">
                    <div className="py-5 row" style={{backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"5px"}}>
                        <div className="col-md-5">
                            <img src={`https://image.tmdb.org/t/p/w500${moviesDetails.poster_path}`} alt="" style={{height:"600px",width:"100%"}} className="ps-5"/>
                        </div>
                        <div className="col-md-7">
                            <p className="text-white px-5 pb-3 fs-1">{moviesDetails.title}</p>
                            <p className="text-white px-5 fs-5">{moviesDetails.overview}</p>
                            <p className="text-white p-5 fs-3">Rating : {moviesDetails.vote_average}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}