let mongoose = require('mongoose');
let connectURL = 'mongodb://localhost:27017/Bahe';
mongoose.set('useFindAndModify', false);  //防止findByIdAndUpdate方法报错

mongoose.connect(connectURL,{ useNewUrlParser: true ,useUnifiedTopology: true },(err) => {
    if(err){
        console.log('连接失败',err)
    }else{
        console.log('连接成功');
    }
});

module.exports = mongoose;