const express = require("express")
const router = express.Router()

router.get("/product", (req, res)=>{
    res.json([
    {
        _id: "5sdadad8dadsd8wdadw" ,
        id: 11,
        name: "Arduino Nano 3.0",
        price: 11,
        stock: 130,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
    },   
    { 
        _id: "5sdadad8dadsd8wdadw" ,
        id: 11,
        name: "Arduino Nano 3.0",
        price: 11,
        stock: 130,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
    }, 
    {
        _id: "5sdadad8dadsd8wdadw" ,
        id: 11,
        name: "Arduino Nano 3.0",
        price: 11,
        stock: 130,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
    }, 
     
    ])
})

module.exports = router