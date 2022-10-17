const categoryController = require('../controllers/category.controller');

const express = require('express');
const router = express.Router();

router.post('/', categoryController.insert);
router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.put('/:id', categoryController.update);

module.exports = router;