/**
 * Created by gowthamraj on 15-01-2021.
 */
const usermodel = require('../models/username');

createUser = (req, res) =>{
    const body = req.body;
    if(!body){
        return res.status(400).json({
            success:false,
            error: 'You must provide inputs'
        })
    }
    const user = new usermodel(body);
    if(!user){
        return res.status(400).json({success:false,error:err})
    }
    user
        .save()
        .then(()=>{
            return res.status(200).json({
                succss:true,
                id:user._id,
                message:'user created'
            })
        })
        .catch((e)=>{
            return res.status(500).json({
                e,
                message:'user not created'
            })
    })
}
getUser = async(req, res)=>{
    await usermodel.find({},(err,users)=>{
        if(err){
            return res.status(500).json({
                success:false,
                message:'error occured while fetching'
            })
        }
        if(!users.length) {
            return res.status(404).json({success:false,message:'no movie found'})
        }
        return res.status(200).json({success:true,data:users})
    }).catch(e=>{console.log(e)})
}
module.exports = {createUser,getUser};