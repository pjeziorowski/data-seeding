var express = require('express');
var router = express.Router();
const { Client } = require('pg')
require("dotenv").config()

const databaseUrl = process.env.DATABASE_URL || 'postgresql://localhost:5432/test';
const client = new Client({ connectionString: databaseUrl });

console.log('Connecting' + databaseUrl)
client.connect()

/* GET home page. */
router.get('/', function (req, res, next) {
  client.query('select * from USER', (err, res) => {
    if (err) throw err
    console.log(res)
    res.render('index', { title: 'Express', users: res })
    client.end()
  })
});

module.exports = router;
