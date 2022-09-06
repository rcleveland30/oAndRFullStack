const express = require('express') //gives access to packages for server

const server = express() //executes the export into server, gives access to methods and properties

server.set('view engine', 'ejs') //set ejs engine

server.use('/css', express.static(__dirname + "/css"))

const navs = ['About']

server.get('/', (req,res) =>{
    res.render('pages', { template:'landing' })
    // res.json({message: 'Hello'})
})

server.get('/about', (req,res) =>{
    res.render('pages', { template:'about' })
    // res.json({message: 'Hello'})
})

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})