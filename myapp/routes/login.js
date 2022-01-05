var express = require('express');
var log = require('./module/authentication');
var create = require('./module/create');
var router = express.Router();

router.post('/', log.login);
router.post('/candidat', create.people);

module.exports = router;