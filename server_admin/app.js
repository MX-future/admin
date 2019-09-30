var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var port = process.env.PORT || 3000;
let utility = require('utility');

//引入api
let Article = require('./api/article');
let Admin = require('./api/admin');

var app = express();

//允许所有跨域
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.header("Content-Type","application/json;charset=utf-8");
  next();
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*******************************************/

//获取数据总数(弃用)
// app.get('/count',(req,res) => {
//   Article.countArticle(res);
// });

//分页查询(暂时不用先)
// app.post('/pagination',(req,res) => {
//   //要将字符串转为数字类型
//   let pageSize = parseInt(req.query.pageSize);
//   let currPage = parseInt(req.query.currPage);
//   Article.pageArticle(pageSize,currPage,res);
// });

//文章管理相关接口

//获取所有数据
app.get('/data',(req,res) => {
  Article.dataArticle(res)
});

//添加
app.post('/add',(req,res) => {
  let title = req.query.title;
  let time = req.query.time;
  let content = req.query.content;
  Article.addArticle(title,time,content,res);

});

//删除
app.post('/delete',(req,res) => {
  let id = req.query.id;
  Article.deleteArticle(id,res);
});

//更新
app.post('/update',(req,res) => {
  let id = req.query.id;
  let title = req.query.title;
  let time = req.query.time;
  let content = req.query.content;
  Article.updateArticle(id,title,time,content,res);

});

/*******************************************/
//登录相关接口
//添加管理员
app.post('/addadmin',(req,res) => {
  let adminName = req.query.adminName;
  let password = req.query.password;
  console.log(password);
  Admin.addAdmin(adminName,password,res);
})

//管理员登录
app.post('/login',(req,res) => {
  let adminName = req.query.adminName;
  let password = req.query.password;
  Admin.adminLogin(adminName,password,res);
});


/*******************************************/ 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port,() => {
  console.log('listen in',port)
});



module.exports = app;
