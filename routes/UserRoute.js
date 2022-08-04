const route = require('express').Router()
const UserController = require('../controllers/UserController')




route.get('/user', UserController.getUser)



module.exports = route