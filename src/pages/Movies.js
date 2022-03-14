import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import{getMovieList} from "../store/actions/movies"
import CardMovie from "../components/CardMovie";

export default function Movies() {

  let movies=useSelector((state)=>state.movies.movieList);
  const dispatch = useDispatch();
  let[pageNumber,setPageNumber]=useState(1)
  const fav = useSelector((state) => state.fav.addFavorites);
  
  useEffect(() => { 
    dispatch(getMovieList(pageNumber))
  }, [pageNumber]);

 const changePageNumer=()=>{
   if(pageNumber>1){
    setPageNumber(--pageNumber)
   }
  }
  const increasePageNumer=()=>{
    setPageNumber(++pageNumber)
  }

  return (
      <div className="Movies" >
        <div className="container">
        <div className="row">
            {movies.map((movie)=>{
                return(
                    <CardMovie movie={movie} key={movie.id}/>
                )
            })}
        </div>
        <div className="d-flex justify-content-center pb-5">
        <button type="button" className="btn btn-outline-info px-4 me-5 mt-4" onClick={changePageNumer}>Prev</button>
        <button type="button" className="btn btn-outline-info px-4 mt-4 "onClick={increasePageNumer}>Next</button>
        </div>
        </div>
    </div>
  );
}
