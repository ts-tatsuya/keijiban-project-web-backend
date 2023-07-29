const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/query', userController.fetchAllData);
router.post('/new', userController.registerUser);

module.exports = router;
