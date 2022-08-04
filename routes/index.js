const route = require('express').Router()
const UserRoute = require('./UserRoute')

route.get('/', (req,res)=>{
    res.json({message:'hello'})
})


route.use(UserRoute)


module.exports = route