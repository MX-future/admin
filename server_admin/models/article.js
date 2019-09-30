let mongoose = require('./connect');
let Schema = mongoose.Schema;

//新建文章表
let ArtSchema = new Schema({
    title: String,
    time: String,
    content: String
});

module.exports = mongoose.model('Article',ArtSchema);