import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Search from '@/views/Search';

// 解决多次跳转到当前路由，抛出NacigationDuplicated警告

// 先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push|replace
VueRouter.prototype.push = function(location, resolve, reject){
    if (resolve && reject){ 
        // call和apply都可以调用函数且篡改函数的上下文，区别是call传参用逗号隔开、apply传递数组
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, ()=>{}, ()=>{})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject){
    if (resolve && reject){
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, ()=>{}, ()=>{})
    }
}

export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            // 加个问号，代表params参数可传可不传
            path:"/search/:k1?",
            name:"search",
            component:Search,
            meta:{show:true}
        },
        {
            // 重定向：项目运行起来时，访问/时，立马定向到首页
            path:'*',
            redirect:"/home"
        }
    ]
})