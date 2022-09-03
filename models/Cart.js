const { model, Schema } = require('mongoose')

const cartSchema = new Schema({
    userId:Schema.Types.ObjectId,
    productId:Schema.Types.ObjectId,
    quantity:Number,
    status:String
})

const Cart = model('Cart', cartSchema);

module.exports = Cart