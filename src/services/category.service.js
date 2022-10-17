const Category = require('../models/category.model');

async function insertCategory(category) {
    const data = new Category({
        name: category.name,
        status: category.status,
        description: category.description
    });
    const result = await data.save();
    return result;
}

module.exports = { insertCategory }