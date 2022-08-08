const route = require('express').Router()
const BannerController = require('../controllers/BannerController')
const { adminAuthorization } = require('../middlewares/authorization')


route.get('/banner-test',BannerController.bannerHomePage)
route.get('/banner',adminAuthorization,BannerController.GetBanner)
route.post('/banner',adminAuthorization,BannerController.addBanner)
route.post('/banner-active/:id',adminAuthorization,BannerController.activeBanner)
route.get('/banner-delete/:id',adminAuthorization,BannerController.deleteBanner)


module.exports = route