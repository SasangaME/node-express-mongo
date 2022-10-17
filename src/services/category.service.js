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

async function getAllCategories() {
    const result = await Category.find();
    return result;
}

async function getCategoyById(id) {
    const result = await Category.findById(id);
    return result;
}

async function updateCategory(id, category) {
    const result = await Category.findByIdAndUpdate(id, category);
    return result;
}

module.exports = { insertCategory, getAllCategories, getCategoyById, updateCategory }