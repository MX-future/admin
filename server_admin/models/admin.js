let mongoose = require('./connect');
let Schema = mongoose.Schema;

//新建管理员表
let adminSchema = new Schema({
    adminName: String,
    password: String
});

module.exports = mongoose.model('Admin',adminSchema);