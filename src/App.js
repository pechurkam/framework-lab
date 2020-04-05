import React from 'react';

import './App.css';
import Add from './Add';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/add" exact component={Add}/>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
