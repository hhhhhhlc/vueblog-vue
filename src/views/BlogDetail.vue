<template>
	<!-- 
	1. 从blogs页面路由过来的
	2. 展现
	-->
	<div class="m-container">
		<Header></Header>
		<h4>{{blog.title}}</h4>
		<el-link v-if='ownBlog'>
			<router-link :to="{name:'BlogEdit', params:{blogId:blog.id}}">编辑</router-link>
		</el-link>
		<el-divider></el-divider>
		<div class="markdown-body" v-html="blog.content"></div>
	</div>
</template>

<script>
	import 'github-markdown-css'
	import Header from "../components/Header";

	export default {
		name: 'BlogDetail.vue',
		components: {
			Header
		},
		data() {
			return {
				blog: {
					id: '',
					title: '',
					content: ''
				},
				ownBlog: false
			}
		},
		created() {
			// 从blogs 页面过来是携带过来的参数
			const blogId = this.$route.params.blogId
			const _this = this

			_this.$axios.get("/blog/" + blogId).then(res => {
				var data1 = res.data.data
				_this.blog.id = data1.id
				_this.blog.title = data1.title
				_this.blog.content = data1.content

				var MarkDownIt = require('markdown-it')
				var md = new MarkDownIt();
				var result = md.render(data1.content);

				_this.blog.content = result
				// 当前的id与存储的id是否一样，一样才能修改
				console.log(data1.userId)
				console.log(_this.$store.getters.getUser.id)
				_this.ownBlog = (data1.userId === _this.$store.getters.getUser.id)
			})

		}
	}
</script>

<style>
</style>
