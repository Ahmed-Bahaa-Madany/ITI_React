import React, { useEffect } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios";

export default function Home(){
    const history = useHistory();
    const location = useLocation();
    const params = useParams();

    return(
        <>
        <div> Home</div>
        <div onClick={() => history.push("/movie-details")}>MovieDetails</div>
        </>
    )
}