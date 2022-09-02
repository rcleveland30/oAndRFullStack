const express = require('express')

const server = express()

server.get('/', (req,res) =>{
    res.json({message:"hello"})
})

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})