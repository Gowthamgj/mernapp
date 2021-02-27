/**
 * Created by gowthamraj on 15-01-2021.
 */
const express = require('express')

const userctrl = require('../controler/usercontroler')
const collectionctrl = require('../controler/collectionAreaController')
console.log(userctrl)
const router = express.Router()
router.post('/user',userctrl.createUser)
router.get('/getUser',userctrl.getUser)
router.post('/validate',userctrl.validate)
router.post('/createCollectionArea',collectionctrl.createCollection)

module.exports = router;