<template>
	<div class=".m-content">
		<h1>欢迎来到博客</h1>
		<div>
			<div>
			    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
				<div>{{user.name}}</div>
			</div>
			<div class="mactionmaction">
			<span><el-link href='/blogs'>主页</el-link></span>
			<el-divider direction="vertical"></el-divider>
			<el-link to='/blog/add'>发表文章</el-link>
			<el-divider direction="vertical"></el-divider>
			<span v-show="hasLogin" > <el-link @click="logout" >退出</el-link></span>
			<span v-show= "!hasLogin"> <el-link @click="login">登录</el-link></span>
			
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				hasLogin: false,
				user: {
					username:'',
					
				},
				blogs:{},
				currentPage:1,
				total:0
			}
		},
		methods: {
			logout() {
				const _this = this
				// 退出的时候需要 抹除信息， 然后回到登录页面
				this.$axios.get("http://localhost:8081/logout", {
					headers: {
						"Authorization": localStorage.getItem("token")
					}
				}).then((res) => {
					_this.$store.commit("REMOVE_INFO"),
					_this.$router.push("/login")
				})
			},
		},
		created() {
			if (this.$store.getters.getUser.username) {
				// 如果有username 那么就是登录状态
				user.username = this.$store.getters.getUser.username;
				hasLogin = true;
			}
		}
		
	}
</script>

<style>
	.m-content {
	  max-width: 960px;
	  margin: 0 auto;
	  text-align: center;
	}
	.mactionmaction {
	  margin: 10px 0;
	}
</style>
