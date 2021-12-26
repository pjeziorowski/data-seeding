var express = require('express');
var router = express.Router();

const databaseUrl = process.env.DATABASE_URL
  || 'mongodb://localhost:27017/test';

console.log('Connecting' + databaseUrl)

mongoose.connect(databaseUrl);

/* GET home page. */
router.get('/', function (req, res, next) {
  imageSchema.find().then((data) => {
    console.log(data);
    res.render('index', { title: 'Express', users: data })
  });
  ;
});

module.exports = router;
