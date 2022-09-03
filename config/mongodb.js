const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(`mongodb+srv://fsw23c7t1:${process.env.MONGOPASS}@fsw23c7gpt1.3nyujy3.mongodb.net/fsw23c7t1?retryWrites=true&w=majority`);
}

module.exports = {
    main
}