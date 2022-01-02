import './App.scss'
import Home from "./Components/Home/Home.jsx"
import Seeds from "./Components/Seeds/Seeds.jsx"
import Flowers from "./Components/Flowers/Flowers.jsx"
import Strains from "./Components/Strains/Strains.jsx"


import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/seed-companies' >
            <Seeds />
          </Route>
          <Route path='/strains' >
            <Strains />
          </Route>
          <Route path='/flowers' >
            <Flowers />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
