const express = require("express");
const router = express.Router();
const { postAddProduct, getAddProduct } = require("../controllers/products");

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

module.exports = router;
