const express = require("express")
const router = express.Router()

router.get("/product", (req, res)=>{
    res.json([
    {
        _id: "5sdadad8dadsd8wdadw" ,
        id: 01,
        name: "Arduino Nano 3.0",
        price: 300,
        stock: 50,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
    },   
    { 
        _id: "sadsadafsaffasfggfga" ,
        id: 02,
        name: "mouse logitech",
        price: 250,
        stock: 100,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
    }, 
    {
        _id: "5sdadad8dadsd8wdadw" ,
        id: 03,
        name: "keyboard",
        price: 199,
        stock: 100,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
    }, 
    {
        _id: "dgsGdgSSFFAFfe33fsdv" ,
        id: 5,
        name: "Monitor",
        price: 4300,
        stock: 50,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
    }, 
     
    ])
})

module.exports = router