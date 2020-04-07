import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {RECIPES_CATEGORIES, SORT_TYPES} from '../constants.js';
import {deleteRecipe, getRecipes} from "../LoadData.js";
import './style/recipes.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const fetchData = async () => {
        setRecipes(await getRecipes(name, category));
    };
    const deleteData = id => async () => {
        await deleteRecipe(id);
        fetchData();
    };
    useEffect(() => {
        fetchData();
    }, [category, name]);
    return (
        <div>
            <div className="header">
                <div className="logo">
                    PECHURA<br/>
                    <span className="second-word"> recipes</span>
                </div>
                <div>
                    <label htmlFor="category" className="header-labels">CATEGORY</label>
                    <select name="category" id="category" onChange={e => setCategory(e.target.value)}>
                        {RECIPES_CATEGORIES.map(t => (
                            <option value={t} key={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="sort" className="header-labels">SORT</label>
                    <select name="sort" id="sort" onChange={e => {
                        localStorage.setItem('sort', e.target.value);
                        fetchData();
                    }}
                            defaultValue={localStorage.getItem('sort')}>
                        {SORT_TYPES.map(t => (
                            <option value={t.value} key={t.value}>
                                {t.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="name" className="header-labels">NAME</label>
                    <input type="text" name="name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="div-add-button">
                    <button className="add-button">
                        <Link to="add">ADD</Link>
                    </button>
                </div>
            </div>
            <div className="recipes-table">
                {(recipes || []).map(recipe => (
                    <div key={recipe.id} className="item">
                        <img src={recipe.photo} alt=""/>
                        <div>{recipe.id}</div>
                        <div>{recipe.name}</div>
                        <div>{recipe.category}</div>
                        <div>{recipe.shortDesc}</div>
                        <div>{recipe.createDate}</div>
                        <div className="actions">
                            <div className="actions-item">
                                <button>
                                    <Link to={`recipes/${recipe.id.toString()}`}>View</Link>
                                </button>
                            </div>
                            <div className="actions-item">
                                <button>
                                    <Link to={`recipes/${recipe.id.toString()}/edit`}>Edit</Link>
                                </button>
                            </div>
                            <div className="actions-item">
                                <button onClick={deleteData(recipe.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Recipes;