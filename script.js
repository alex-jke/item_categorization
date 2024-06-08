// script.js
document.addEventListener('DOMContentLoaded', function() {
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    const itemsContainer = document.getElementById('items');
    const categoriesContainer = document.getElementById('categories');

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.textContent = item;
        itemsContainer.appendChild(itemElement);
    });

    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category';
        categoryElement.id = category;
        const titleElement = document.createElement('h3');
        titleElement.className = 'category-title'; // Add the 'category-title' class
        titleElement.textContent = category;
        categoryElement.appendChild(titleElement);

        const sortableElement = document.createElement('div');
        sortableElement.className = 'sortable-area';
        categoryElement.appendChild(sortableElement);

        categoriesContainer.appendChild(categoryElement);
    });

    new Sortable(itemsContainer, {
        group: 'shared',
        animation: 150
    });

    categories.forEach(category => {
        new Sortable(document.getElementById(category).getElementsByClassName('sortable-area')[0], {
            group: 'shared',
            animation: 150
        });
    });

    document.getElementById('submit-button').addEventListener('click', function() {
        const results = [];
        categories.forEach(category => {
            const categoryElement = document.getElementById(category);
            const categoryItems = categoryElement.getElementsByClassName('item');
            for (let item of categoryItems) {
                results.push({ item: item.textContent, category: category });
            }
        });

        if (results.length !== items.length) {
            alert('Please categorize all items.');
        } else {
            // Replace the following line with the code to save results in the format required by Unipark
            console.log('Results:', results);
            alert('Results saved. Check console for details.');
        }
    });
});