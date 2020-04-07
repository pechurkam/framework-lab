import React from 'react';
import {RECIPES_CATEGORIES} from "../constants";
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import './style/addEdit.css';

const Add = () => {
    const history = useHistory();
    const createNew = async ({name, short, long, category}) => {
        return await fetch('http://localhost:3001/recipes', {
            method: 'POST',
            body: JSON.stringify({
                name,
                shortDesc: short,
                longDesc: long,
                category,
                photo: "https://res.cloudinary.com/glovoapp/w_200,h_200,c_fit,f_auto,q_auto/Products/grotbqgysejunm6gamm1",
                createDate: moment(),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };
    return (
        <div>
            <form onSubmit={async (e) => {
                e.persist();
                e.preventDefault();
                const {target: {elements: {name, short, long, category}}} = e;
                await createNew({
                    name: name.value,
                    short: short.value,
                    long: long.value,
                    category: category.value,
                });
                history.push('/recipes');
            }}>
                <input type="text" name="name" placeholder="Name" className="input"/>
                <input type="text" name="short" placeholder="Short desc" className="input"/>
                <textarea name="long" placeholder="Long desc" className="input"/>
                <select name="category" id="category" className="input">
                    {RECIPES_CATEGORIES.map(t => (
                        <option value={t} key={t}>
                            {t}
                        </option>
                    ))}
                </select>
                <input type="submit" value="submit" className="input"/>
            </form>
            <button className="back">
                <Link to="/" >Back</Link>
            </button>
        </div>
    )
};

export default Add;