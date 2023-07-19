const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/query', userController.fetchAllData);

module.exports = router;
