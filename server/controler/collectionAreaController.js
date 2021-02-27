const collectionmodel = require('../models/collectionarea');

createCollection = (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).json({
            success:false,
            error: 'You must provide inputs'
        })
    }
    const collection = new collectionmodel(body);
    if(!collection){
        return res.status(400).json({success:false,error:err})
    }
    collection
        .save()
        .then((s) => {
            console.log(s)
            return res.status(200).json({
                succss:true,
                id:s._id,
                message:'collectionarea created'
            }) 
        })
        .catch((e)=>{
            console.log(e)
            return res.status(500).json({
                e,
                message:'user not created'
            })
        })
}
module.exports = {createCollection};
