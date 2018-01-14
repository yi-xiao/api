/**
 * Created by Administrator on 2017/10/9.
 */
const express = require('express');
const app = express();
// 跨域设置
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})
app.get('/booklist',require('./router/booklist'));
app.get('/booktitles',require('./router/booktitles'));
app.get('/bookread',require('./router/bookread'));
app.get('/charactors',require('./router/charactors'));
app.get('/search',require('./router/search'));

app.listen(3334, () => {
    console.log('yyy')
})