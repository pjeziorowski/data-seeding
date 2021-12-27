const { Client } = require('pg')
const fs = require('fs')

require("dotenv").config()

const databaseUrl = process.env.DATABASE_URL || 'postgresql://localhost:5432/test';
const client = new Client({ connectionString: databaseUrl });
client.connect()

const seedQuery = fs.readFileSync('db/seeding.sql', { encoding: 'utf8' })

if (process.env.NODE_ENV != 'production') {
    client.query(seedQuery, [], (err, res) => {
        if (err) throw err
        console.log('Seeding Completed!')
    })
} else {
    console.log('Production - skipping database seeding')
}

client.end()
