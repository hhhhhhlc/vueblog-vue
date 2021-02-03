import router from './router/index.js'

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requireAuth)) {
		console.log('=================')
		let token = localStorage.getItem("token");
		if (token) {
			// 如果token存在，放行
			next();
		} else {
			// 如果token不存在那么直接返货登录界面
		
			if (to.path == '/login') {
				// 如果想要去登录界面，直接去
				next();
			} else {
				// 如果是去别的地方，改变路由
				next('/login');
			}
		}
	} else {
		next();
	}
})
