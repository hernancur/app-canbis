import './App.scss'
import Home from "./Components/Home/Home.jsx"
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
            <h1>WIP</h1>
            <h2>seed companies</h2>
          </Route>
          <Route path='/strains' >
            <h1>WIP</h1>
            <h2>strains</h2>
          </Route>
          <Route path='/flowers' >
            <h1>WIP</h1>
            <h2>flowers</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
