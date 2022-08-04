const { model, Schema } = require('mongoose')

const likeSchema = new Schema({
    userId:Schema.Types.ObjectId,
    productId:Schema.Types.ObjectId,
    deleted:Boolean
})

const Like = model('Like', likeSchema);

module.exports = Like