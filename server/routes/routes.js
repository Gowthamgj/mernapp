/**
 * Created by gowthamraj on 15-01-2021.
 */
const express = require('express')

const userctrl = require(('../controler/usercontroler'))
console.log(userctrl)
const router = express.Router()
router.post('/user',userctrl.createUser)
router.get('/getUser',userctrl.getUser)
router.post('/validate',userctrl.validate)

module.exports = router;