const typeCtrl = require('../controllers/typeCtrl')
const router = require('express').Router()

router.route("/type")
.get(typeCtrl.getType)
.post(typeCtrl.createType)

module.exports = router