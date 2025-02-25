const express = require("express")

let router = express.Router()
let carsController = require("../controller/cars.controller")

router.get("/", carsController.getAllCars);
router.post("/",carsController.postCars);
router.put("/:id",carsController.updateCars)
router.delete("/:id",carsController.deleteCars)

module.exports = router