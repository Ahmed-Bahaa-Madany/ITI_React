import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Favorites from './pages/Favorites';
import { LanguageContext } from "./context/language";
import { useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const [lang, setLang] = useState("EN");
  const language = useSelector((state) => state.language.lang);
  console.log(language)
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
    <div
      className={language === "EN" ? "text-left" : "text-right"}
      dir={language === "EN" ? "ltr" : "rtl"}
    >
     <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path={"/"} exact component={Movies}/>
          <Route path={"/movie-details/:id"} exact component={MoviesDetails} />
          <Route path={"/favorites"} exact component={Favorites} />
          <Route path={"*"} component={NotFound} /> 
        </Switch>
</BrowserRouter>
</div>
</LanguageContext.Provider>
  );
}

export default App;
