import React from "react"
import { BrowserRouter as Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import About from "../pages/About"
import Users from "../pages/Users"

function AppRouter() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users" component={Users}/>
        </Switch>

        // <Router>
        //     <Route exact path="/" component={Home} />
        //     <Route exact path="/about" component={About} />
        //     <Route exact path="/users" component={Users}/>
        // </Router>
    )
}
export default AppRouter