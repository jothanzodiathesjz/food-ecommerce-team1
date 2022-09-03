const { model, Schema } = require('mongoose')

const chatSchema = new Schema({
    message:String,
    senderId:Schema.Types.ObjectId,
    recieverId:Schema.Types.ObjectId,
    deleted:Boolean
})

const Chat = model('Chat', chatSchema);

module.exports = Chat