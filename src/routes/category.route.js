const categoryController = require('../controllers/category.controller');

const express = require('express');
const router = express.Router();

router.post('/', categoryController.insert);

module.exports = router;