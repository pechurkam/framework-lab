import React from 'react';
import './App.css';

function Add() {
    return (
        <div className="add-page">
            <React.Fragment>
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control name-input" id="name" placeholder="Name"/>
            </React.Fragment>
            <React.Fragment>
                <label htmlFor="category">Category</label><br/>
                <select className="browser-default custom-select">
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <br/>
            </React.Fragment>
            <React.Fragment>
                <label htmlFor="description">Description</label><br/>
                <textarea name="description" id="" cols="30" rows="5"></textarea>
                <br/>
            </React.Fragment>
            <React.Fragment>
                <label htmlFor="longDesc">How to cook</label><br/>
                <textarea name="longDesc" id="" cols="30" rows="5"></textarea>
            </React.Fragment>
            <br/>
            <button type="button" className="btn btn-success">Add</button>
            <button type="button" className="btn btn-danger cancel-button">Cancel</button>
        </div>
    );
}

// function Add() {
//     return (
//         <div>
//             <React.Fragment>
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter email" name="email">
//             </React.Fragment>
//             <React.Fragment>
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter email" name="email">
//             </React.Fragment>
//         </div>);
// }

export default Add;