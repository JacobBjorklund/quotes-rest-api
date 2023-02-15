const express = require('express')
const server = express()
const quotes = require('./data/quotes.json')
server.use(express.static('public'))

server.get('/api/quote', (req, res) => {
    const randomItem = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomItem)
})

server.listen(3000)