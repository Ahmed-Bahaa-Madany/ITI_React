import {axiosInstance} from "./../../Network/axiosConfig"

export const getMovieList = (pageNumber) => (dispatch) => {
    axiosInstance
    .get("/popular",{
      params:{
      page:pageNumber
      }
    })
    .then((res) =>
      dispatch({
        type: "GET_MOVIE_LIST",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
}

export const getMovieDetails = (params) => (dispatch) => {
    axiosInstance
    .get(`/${params.id}`)
    .then((res) =>
      dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
}


