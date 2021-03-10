const express = require("express");
const { error } = require("../controllers/error");
const router = express.Router();

router.use(error);

module.exports = router;
