const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path=require('path');
const cors = require('cors'); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); 
//开启静态文件
//app.use(express.static(path.join(__dirname,'./public')));
//app.use('/admin',express.static(path.join(__dirname,'./admin')));
//引入路由模块
const goodsList=require('./router/goodsList.js')

//使用引入的路由
app.use('/api/goodsList',goodsList)

app.listen(8081,()=>{
	console.log('服务器成功开启');
})
