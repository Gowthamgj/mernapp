/**
 * Created by gowthamraj on 15-01-2021.
 */
const express = require('express')

const userctrl = require(('../controler/usercontroler'))

const router = express.Router()
router.post('/user',userctrl.createUser)
router.get('/getUser',userctrl.getUser)

module.exports = router;