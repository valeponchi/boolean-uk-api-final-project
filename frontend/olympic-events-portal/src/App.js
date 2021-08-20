import React from 'react'
import { Route, Switch } from 'react-router-dom'

import "./App.css"
import Nav from "./components/nav"
import SportsPage from "./pages/sportsPage"
import AddSportPage from "./pages/addSportPage"
import logo from "./images/logo/logo.png"
function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="flag" className="logo" />
        {/* change alt to country name */}
        <h1>Olympic Events Portal</h1>
      </header>
      <div className="portal">
        <Route path="/">
          <Nav />
        </Route>
        <Switch>
          <Route path="/" exact>
            <SportsPage />
          </Route>
          <Route path="/add-sport" exact>
            <AddSportPage />
          </Route>
        </Switch>
      </div>
    </div>
  )

}

export default App
