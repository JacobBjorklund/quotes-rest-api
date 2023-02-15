const express = require('express')
const server = express()
const quotes = require('./data/quotes.json')
server.use(express.static('public'))

server.get('/api/quote', (req, res) => {
    res.status(200).json(quotes.map(text => ({
        quote: text.quote,
        author: text.author
    })))
})


server.listen(3000)