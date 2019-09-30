let Article = require('../models/article');


//查询总数(弃用)
// module.exports.countArticle = (res) => {
//     Article.countDocuments((err,num) => {
//         if(err){
//             return res.send({ status: 0, msg: err || '获取总数失败' });
//         }else{
//             return res.send({ status: 1, msg: '获取总数成功', totalPage: num });
//         }
//     });
// }

//分页查询(暂时不用)
// module.exports.pageArticle = (pageSize,currPage,res) => {
//     //pageSize;  //每页数量
//     //currPage;  //当前页
//     let sort = { 'time': -1 }  //按时间倒序排序
//     let skipnum = (currPage - 1) * pageSize;  //跳过数
//     Article.find().skip(skipnum).limit(pageSize).sort(sort).exec((err,resnum) => {
//         if(err){
//             return res.send({ status: 0, msg: err || '分页查询失败' });
//         }else{
//             return res.send({ status: 1, msg: '分页查询成功', result: resnum });
//         }
//     });
// }

//查询所有数据
module.exports.dataArticle = (res) => {
    Article.find((err,docs) => {
        if(err){
            return res.send({ status: 0, msg: err || '获取数据失败' });
        }else{
            return res.send({ status: 1, msg: '获取数据成功', data: docs, totalPage: docs.length });
        }
    });
}

//添加
module.exports.addArticle = (title,time,content,res) => {
    let art = new Article({
        title: title,
        time: time,
        content: content
    });
    //console.log('方法里',title,time,content);
    //添加记录
    art.save((err) => {
        if(err){
            return res.send({ status: 0, msg: err || '添加失败' });
        }else{
            return res.send({ status: 1, msg: '添加成功' });
        }
    });
}

//删除
module.exports.deleteArticle = (id,res) => {

    //删除记录
    Article.remove({_id: id},(err) => {
        if(err){
            return res.send({ status: 0, msg: err || '删除失败' });
        }else{
            return res.send({ status: 1, msg: '删除成功' });
        }
    });

}

//更新
module.exports.updateArticle = (id,title,time,content,res) => {
    Article.findByIdAndUpdate(id,{
        title: title,
        time: time,
        content: content
    },(err) => {
        if(err){
            return res.send({ status: 0, msg: err || '更新失败' });
        }else{
            return res.send({ status: 1, msg: '更新成功' });
        }
    });
}

