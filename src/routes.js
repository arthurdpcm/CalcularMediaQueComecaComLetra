const express = require("express")
const router = express.Router()
const itensController = require("./controllers/itensController")


router.get("/itens", itensController.findAll)
router.post("/itens", itensController.create)
router.patch("/itens/:id", itensController.update)
router.delete("/itens/:id", itensController.delete)
router.get("/itens/:id", itensController.findOne)


module.exports = router