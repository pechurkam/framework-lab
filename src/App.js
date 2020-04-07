import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Redirect from "react-router-dom/es/Redirect";

import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/recipes" exact component={Recipes}/>
                    <Route path="/recipes/:recipeId" exact component={Recipe}/>
                    <Route path="/add" exact component={Add}/>
                    <Route path="/recipes/:recipeId/edit" exact component={Edit}/>
                    <Redirect from="/" to="recipes" />
                </Switch>
            </div>
        </Router>
    );
}


export default App;
