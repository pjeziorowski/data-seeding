var express = require('express');
var router = express.Router();

const { Pool } = require('pg')

require("dotenv").config()
const databaseUrl = process.env.DATABASE_URL || 'postgresql://localhost:5432/test';
const pool = new Pool({
  connectionString: databaseUrl,
})

/* GET home page. */
router.get('/', function (req, response, next) {
  pool.query('select * from users', (err, res) => {
    console.log(res)
    response.json({users: res})
    pool.end()
  })
});

module.exports = router;
