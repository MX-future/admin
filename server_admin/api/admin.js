let Admin = require('../models/admin');

//添加管理员
module.exports.addAdmin = (adminName,password,res) => {
    let admin = new Admin({
        adminName: adminName,
        password: password
    });

    admin.save((err) => {
        if(err){
            return res.send({ status: 0, msg: err || '添加失败' });
        }else{
            return res.send({ status: 1, msg: '添加成功' });
        }
    });
}

//登录判断逻辑
module.exports.adminLogin = (adminName,password,res) => {
    let loginName = adminName;
    let loginPwd  = password;
    Admin.findOne({ adminName: loginName }, (err,content) => {
        if(content === null){
            return res.send({ status: 0, msg: err || '管理员不存在'} );
        }else{
            if(loginPwd === content.password){
                return res.send({ status: 1, msg: '登录成功' });
            }else{
                return res.send({ status: 0, msg: err || '密码错误' });
            }
        }
    });
}