let express = require("express");
let router = new express.Router();
let {
    getRoom,
    updateRoom,
    resetRoom,
    registeradmin,
} = require("./roomServices");
const {roomValidator} = require("./roomValidator")


router.get("/:nameRoom", async (req, res, next) => {
    try {
      let {nameRoom} = req.params;
      let result = await getRoom(nameRoom);
      if (result === null) {
        return res.status(404).send({message: "Not found Post"});
      }
      return res.send({result});
    } catch (error) {
      console.error(error);
      return res.status(500).send({error: "Server Error"});
    }
});

router.put("/update/:nameRoom", async (req, res, next) => {
    try {
        // console.log(req.params);
      let {nameRoom} = req.params;
      let content = req.body.content;
      let blog = req.body.blog;
      let nameCUSTOMER = req.body.nameCustomer;
      let phoneCUSTOMER = req.body.phoneCustomer;
      let timeRENTAL = req.body.timeRental;
      let totalMONEY = req.body.timeRental * 100000;
      let statesROOM = "Booked"
  
      let result = await updateRoom(nameRoom,content,blog,statesROOM, nameCUSTOMER, phoneCUSTOMER, timeRENTAL,totalMONEY);
      let validator = await roomValidator(req);
      if (validator !== null) {
        return res.send({success: "2" , message: validator});
      }
      else{
        if (result === null) {
          return res.status(404).send({message: "Not found Room"});
        }
        return res.send({
          success: "1",
          message: "Update successfully.",
          data: result
        });
      }   
    } catch (error) {
      console.error(error);
      return res.status(500).send({error: "Server Error"});
    }
});

router.put("/reset/:nameRoom", async (req, res, next) => {
    try {
      let {nameRoom} = req.params;
      let result = await resetRoom(nameRoom);
      if (result === null) {
        return res.status(404).send({message: "Not found Post"});
      }
      return res.send({
        success : "1",
        message: "Reset successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({error: "Server Error"});
    }
});


module.exports = router;