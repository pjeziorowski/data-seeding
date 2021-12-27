const { Client } = require('pg')
const fs = require('fs')
const client = new Client()

require("dotenv").config()

client.connect()

const seedQuery = fs.readFileSync('./seeding.sql', { encoding: 'utf8' })

if (process.env.NODE_ENV != 'production') {
    client.query(seedQuery, [], (err, res) => {
        if (err) throw err
        console.log('Seeding Completed!')
    })
} else {
    console.log('Production - skipping database seeding')
}

client.end()
