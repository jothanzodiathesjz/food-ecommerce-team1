const { model, Schema } = require('mongoose')

const commentSchema = new Schema({
    comment:String,
    userId:Schema.Types.ObjectId,
    blogId:Schema.Types.ObjectId,
    deleted:Boolean
})

const Comment = model('Comment', commentSchema);

module.exports = Comment