import { combineReducers } from "redux";
import fav from "./favorites";
import movies from "./movies";
import language from "./language";
export default combineReducers({
  fav,
  movies,
  language,
});