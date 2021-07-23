const express = require("express");
const router = express.Router();
const user = require("./models/user");
const bcrypt = require("bcryptjs");
const constants = require("./constant");

router.post("/login", async (req, res) => {
    console.log("login: " + JSON.stringify(req.body));
    const { username, password } = req.body;
    const result = await user.findOne({ where: { username: username } });
    console.log("มาถึงเเล้ว 1 จากการ Login")
    try {
      if (result) {
        console.log("มาถึงเเล้ว 2")
        if (bcrypt.compareSync(password, result.password)) {
            console.log("มาถึงเเล้ว 3")
          res.json({
            result: constants.kResultOk,
            message: JSON.stringify(result)
          }); console.log("มาถึงเเล้ว 3.5 --> login ถูกต้อง")
          //console.log(constants.kResultOk)
          console.log(JSON.stringify(result))
          console.log("-------------------------------------------------------")
        } else {
            console.log("มาถึงเเล้ว 4 --> Password ผิด")  
          res.json({ result: constants.kResultNok, message: "Invalid password" });
          console.log("-------------------------------------------------------")
        }
      } else {
        console.log("มาถึงเเล้ว 5 --> Username ผิด")
        console.log("-------------------------------------------------------")
        res.json({ result: constants.kResultNok, message: "Invalid username" });
      }
    } catch (error) {
        console.log("มาถึงเเล้ว 6")
      res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
    }
  });

  router.post("/register", async (req, res) => {
    try {
      console.log("มาถึง api_authen-->register")
      console.log("register: " + JSON.stringify(req.body));
      req.body.password = await bcrypt.hash(req.body.password, 8);
      console.log("มาถึง api_authen-->register-1")
      const result = await user.create(req.body);
      console.log("มาถึง api_authen-->register-2")
      res.json(
              {
                result: constants.kResultOk,
                message: JSON.stringify(result) 
              });
      console.log("มาถึง api_authen-->register-3-->success<")
      console.log("-------------------------------------------------------")
    } catch (error) {
      res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
    }
  });
module.exports = router;
