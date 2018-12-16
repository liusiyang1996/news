// 导入express
const express = require('express');
// 导入路由模块
const router = require('./router');

// 实例化app
const app = express();

// 使用路由模块
app.use(router);

// 监听端口
app.listen(3000, () => {
    console.log('server is running');
})