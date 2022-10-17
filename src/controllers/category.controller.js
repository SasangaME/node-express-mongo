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

module.exports = { insert }