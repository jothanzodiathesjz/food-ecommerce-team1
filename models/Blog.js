const { model, Schema } = require('mongoose')

const blogSchema = new Schema({
    image:String,
    title:String,
    paragraph:String,
    userId:Schema.Types.ObjectId,
    deleted:Boolean
})

const Blog = model('Blog', blogSchema);

module.exports = Blog