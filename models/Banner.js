const { model, Schema } = require('mongoose')

const bannerSchema = new Schema({
    image:String,
    active:Boolean,
    deleted:Boolean
})

const Banner = model('Banner', bannerSchema);

module.exports = Banner