const express = require('express') //gives access to packages for server

const server = express() //executes the export into server, gives access to methods and properties

server.use(express.json()) // middleware executes request before server
server.use('/css', express.static(__dirname + "/css"))
server.use('/js', express.static(__dirname + "/js"))
server.set('view engine', 'ejs') //set ejs engine

const navs = ['Home','About','Contact','SignUp'] // navigation pages

server.get('/', (req,res) => {
    res.render('pages', { template: 'landing',navs })
})

server.get('/Home', (req,res) => {
    res.render('pages', { template: 'landing',navs })
})

server.get('/About', (req,res) => {
    res.render('pages', { template: 'about',navs })
})

server.get('/Contact', (req,res) => {
    res.render('pages', { template: 'contact',navs })
})

server.get('/SignUp', (req,res) => {
    res.render('pages', { template: 'signup',navs })
})

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})