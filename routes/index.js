var express = require('express');
var router = express.Router();

const { Pool } = require('pg')

require("dotenv").config()
const databaseUrl = process.env.DATABASE_URL || 'postgresql://localhost:5432/test';
const pool = new Pool({
  connectionString: databaseUrl,
})

/* GET home page. */
router.get('/', function (req, res, next) {
  pool.query('select * from users', (err, res) => {
    console.log(res)
    res.render('index', { title: 'Express', users: res })
    pool.end()
  })
});

module.exports = router;
