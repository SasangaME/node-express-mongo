const categoryService = require('../services/category.service');

async function insert(req, res, next) {
    try {
        const data = await categoryService.insertCategory(req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

async function getAll(req, res, next) {
    try {
        const data = await categoryService.getAllCategories();
        res.json(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

async function getById(req, res, next) {
    try {
        const data = await categoryService.getCategoyById(req.params.id);
        res.json(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        const data = await categoryService.updateCategory(req.params.id, req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { insert, getAll, getById, update }