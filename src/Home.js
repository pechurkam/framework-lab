import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home-header">
            <div className="dropdown header-item">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    Categories
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li><a href="#">Category 1</a></li>
                    <li><a href="#">Category 2</a></li>
                    <li><a href="#">Category 3</a></li>
                </ul>
            </div>

            <div className="dropdown header-item">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    Sort date
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li><a href="#">Asc</a></li>
                    <li><a href="#">Desc</a></li>
                </ul>
            </div>

            <div className="form-group has-search header-item">
                <input type="text" className="form-control search-input" placeholder="Search"/>
            </div>

            <div className="header-item">
                <Link to='/add'>
                    <button type="button" className="btn btn-success">Add recipe</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;