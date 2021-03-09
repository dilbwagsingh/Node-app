const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();

// Implicitly these are routed to /admin/add-product using GET (check the part in app.js file)
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// Implicitly these are routed to /admin/add-product using POST (check the part in app.js file)
router.post("/add-product", (req, res) => {
  res.redirect("/");
});

module.exports = router;
