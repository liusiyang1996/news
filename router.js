// 导入express
const express = require('express');
// 导入登录页面处理函数
const signin = require('./constrollers/c_signin');

// 实例化路由对象
const router = express.Router();

// 配置路由
router.get('/signin', signin.signinShow);

// 导出路由对象
module.exports = router;