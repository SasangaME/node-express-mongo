const buildController = require('../controllers/build.contorller');
const express = require('express');
const router = express.Router();

router.get('/', buildController.build);

module.exports = router;