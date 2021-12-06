
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Resturant from './components/Resturant/Resturant';
import NotFound from './components/notFound/NotFound';
import Header from './components/Resturant/Header/Header';
import MealDetails from './components/mealDetails/MealDetails';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Header></Header>
<Switch>
  <Route exact path = "/resturant">
  <Resturant></Resturant>
  </Route>
  <Route path = "/resturant/:mealID">
  <MealDetails></MealDetails>
  </Route>
  <Route path = "*">
  <NotFound></NotFound>
  </Route>
  <Route exact path = "/">
  <Resturant></Resturant>
  </Route>
 
</Switch>
</BrowserRouter>

    </div>
  );
}

export default App;
