import React, {useEffect, useState} from 'react';
import {RECIPES_CATEGORIES} from "../constants";
import { Link, useParams } from 'react-router-dom';
import './style/addEdit.css';

const Edit = () => {
    const { recipeId: id } = useParams();
    const putData = ({name, short, long, category, createDate, photo}) => {
        fetch(`http://localhost:3001/recipes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name,
                shortDesc: short,
                longDesc: long,
                category,
                createDate,
                photo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };
    const [recipe, setRecipe] = useState(null);
    const fetchData = async () => {
        const result = await fetch(`http://localhost:3001/recipes?id=${id}`);
        const recipes = await result.json();
        if(!recipes.length){
            return;
        }
        setRecipe(recipes[0])
    };
    useEffect(() => {
        fetchData();
    }, []);
    if(!recipe){
        return null;
    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                const {target: {elements: {name, shortDesc, longDesc, category}}} = e;
                putData({
                    name: name.value,
                    shortDesc: shortDesc.value,
                    longDesc: longDesc.value,
                    category: category.value,
                    createDate: recipe.createDate,
                    photo: recipe.photo
                });
                alert("Successfully changed");
            }}>
                <input type="text" name="name" defaultValue={recipe.name} className="input"/>
                <input type="text" name="shortDesc" defaultValue={recipe.shortDesc} className="input"/>
                <textarea name="longDesc" defaultValue={recipe.longDesc} className="input"/>
                <select name="category" id="category" defaultValue={recipe.category} className="input">
                    {RECIPES_CATEGORIES.map(t => (
                        <option value={t} key={t}>
                            {t}
                        </option>
                    ))}
                </select>
                <input type="submit" value="submit" className="input"/>
            </form>
            <button className="back">
                <Link to="/" >Back </Link>
            </button>
        </div>
    )
};

export default Edit;