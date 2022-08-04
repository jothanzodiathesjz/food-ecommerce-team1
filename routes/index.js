const route = require('express').Router()
const UserRoute = require('./UserRoute')
const ProductRoute = require('./ProductRoute')

route.get('/', (req,res)=>{
    res.json({message:'hello'})
})


route.use(UserRoute)
route.use(ProductRoute)



module.exports = route