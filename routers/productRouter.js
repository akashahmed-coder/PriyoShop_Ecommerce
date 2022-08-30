const ProductCtrl = require('../controllers/productCtrl')
const router = require('express').Router()


router.get("/product",ProductCtrl.getProduct)
router.post("/product",ProductCtrl.createProduct)



module.exports = router

