const { User } = require('../models/index')

// test get user
const getUser=async(req,res)=>{
    const users = await User.find()
    res.status(200).json({users})
}

module.exports = { 
    getUser
}