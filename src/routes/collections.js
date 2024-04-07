const express = require("express");
const router = express.Router();

const CollectionsController = require("../app/controllers/CollectionsController");

router.get("/bikes", CollectionsController.bikes);
router.get("/", CollectionsController.index);

module.exports = router;
