const categorySearch = (input, category) => {
    if (!input) {
        return '';
    }
    return `${category}=${input}`;
};

const sortSearch = (input) => {
    if (!input) {
        return '';
    }
    return `_sort=createDate&_order=${input}`;
};

const searchName = (input) => {
    if (!input) {
        return '';
    }
    return `name_like=${input}`;
};

export const getRecipes = async (name, category) => {
    const categoryParam = categorySearch(category, 'category');
    const sort = sortSearch(localStorage.getItem('sort'));
    const filter = searchName(name);
    const data = await fetch(`http://localhost:3001/recipes?${[categoryParam, sort, filter].join('&')}`);
    return await data.json();
};

export const deleteRecipe = async id => {
    return await fetch(`http://localhost:3001/recipes/${id}`, { method: 'DELETE'});
};