const express = require("express")
const router = express.Router()
const user = require("./models/user");
//const bcrypt = require("bcryptjs")

router.post("/login", (req, res)=>{
    console.log("login: " + JSON.stringify(req.body))
    res.json({result: "Login" , username: req.body.username})
})

router.post("/register", async (req, res)=>{
    console.log("register: " + JSON.stringify(req.body))
    //req.body.password = await bcrypt.hash(req.body.password, 8);
    const result = await user.create(req.body)
    res.json({result: "ok" , username: req.body.username})
})
module.exports = router