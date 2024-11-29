const express = require('express');
const router = express.Router();

let { listar } = require('../controller/xController')

router.get('/alison', listar)

module.exports = router;
