import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Header from '../components/Header.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'

Vue.use(VueRouter)

const routes = [
	{
		// 登录界面
		// 默认的界面
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		// 新增blogedit编译页面
		path:'/blog/add',
		name:'BlogEdit',
		component:BlogEdit
	},
	{
		path:'/blogs',
		name:'Blogs',
		component:Blogs
	},
	,
	{
		path:'/blog/:blogId',
		name:'BlogDetail',
		component:BlogDetail
	},
	{
		
		path:'/',
		redirect:'/login'
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
