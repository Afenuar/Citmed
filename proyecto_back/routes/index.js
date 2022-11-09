var express = require('express');
var router = express.Router();
require('./database')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'HolaMundo' });
  res.send("Prueba sin motor de vista")
});

module.exports = router;
