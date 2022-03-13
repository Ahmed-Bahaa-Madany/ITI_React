import Header from './components/navbar/navbar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Switch , Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/movie-details/:id'} exact component={MovieDetails}/>
      <Route path={'*'} exact component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
