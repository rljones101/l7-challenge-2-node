const express = require('express')
const chiSquareController = require('../controllers/chiSquareController.js')

const router = express.Router()

router.route('/').post(chiSquareController.getChiSquare)

module.exports = router