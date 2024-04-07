const express = require("express");
const router = express.Router();

const BikesController = require("../app/controllers/BikesController");

router.get("/bikes", BikesController.bikes);

module.exports = router;
