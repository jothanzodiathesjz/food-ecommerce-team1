const { model, Schema } = require('mongoose')

const discountSchema = new Schema({
    name:String,
    totalDiscount:Number,
    discountPercentage:Number,
    deleted:Boolean
})

const Discount = model('Discount', discountSchema);

module.exports = Discount