const express = require("express");
let router = require("express").Router();
const controller = require("../controller/controller");

// router.get("/", (req, res) => {
//   res.send("Dilvery API v1");
// });
router.post("/newProduct", controller.addNewProduct);
router.get("/product", controller.getAllProducts);
router.get("/product/:id", controller.getProducteByID);
router.get("/getCategory/:category", controller.getProducteByCategory);
router.put("/updateProduct/:id", controller.updateProduct);
router.delete("/deleteProduct/:id", controller.deleteProduct);

module.exports = router;
