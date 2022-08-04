const { model, Schema } = require('mongoose')

const orderSchema = new Schema({
    totalHarga:Number,
    cartId:Schema.Types.ObjectId,

})

const Order = model('Order', orderSchema);

module.exports = Order