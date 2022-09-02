const express = require('express') //gives access to packages for server

const server = express() //executes the export into server, gives access to methods and properties

server.set('view engine', 'ejs') //set ejs engine

const navs = ['About']

server.get('/', (req,res) =>{
    res.render('pages', { template:'landing' })
})

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})