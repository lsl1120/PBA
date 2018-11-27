import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home'
import Classification from '../components/pages/Classification/Classification'
import ShoppingCart from '../components/pages/ShoppingCart/ShoppingCart'
import Use from '../components/pages/Use/Use'
import ClassifiList from '../components/pages/Classification/sonClassification/ClassifiList'
import Login from '../components/pages/Use/Login'
import Reg from '../components/pages/Use/Reg'
import MyInformation from '../components/pages/Use/MyInformation'
import goodsInfo from '../components/pages/goodsInfo/goodsInfo'

Vue.use(Router)

export default new Router({
//	linkActiveClass : 'active',
  routes: [
    {
      path: '/',
//    name: 'Home',
     redirect: '/Home',
      component: Home
    },
    //首页路由
    {
    	path: '/Home',
      name: 'Home',
       
      component: Home
    },
    //分类路由
    {
    	path: '/Classification',
      name: 'Classification',
      component: Classification,
      
    },
    //列表页路由
    {
    	 	path:'/ClassifiList',
      	name:'ClassifiList',
      	component:ClassifiList
    },
    //购物车路由
    {
    	path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    //详情页路由
    {
    	path: '/goodsInfo',
      name: 'goodsInfo',
      component: goodsInfo
    },
    //我的路由
    {
    	path: '/Use',
      name: 'Use',
      component: Use,
       children:[
       		{path:'Login',name:'Login',component:Login},
        	{path:'Reg',name:'Login',component:Reg},
          {path:'MyInformation',name:'Login',component:MyInformation},
       ]
    }
  ]
})
