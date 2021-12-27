const { Client } = require('pg')
const fs = require('fs')
const client = new Client()

require("dotenv").config()

client.connect()

const seedQuery = fs.readFileSync('./seeding.sql', { encoding: 'utf8' })

client.query(seedQuery, [], (err, res) => {
    if (err) throw err
    console.log('Seeding Completed!')
    client.end()
})
