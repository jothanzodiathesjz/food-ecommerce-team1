const route = require('express').Router()
const UserRoute = require('./UserRoute')
const BannerRoute = require('./BannerRoute')

route.get('/', (req,res)=>{
    res.json({message:'hello'})
})


route.use(UserRoute)
route.use(BannerRoute)


module.exports = route