<template>
	<div class="mcontaner">
		<Header></Header>
		<div class="block">
			<el-timeline >
				<el-timeline-item v-bind:timestamp="blog.created" placement="top" v-for="blog in blogs">
					<el-card>
						<h4><router-link :to="{name:'BlogDetail', params:{blogId:blog.id}}">{{blog.title}}</router-link></h4>
							<p>{{blog.title}}<p>
						</router-link>
						<p></p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
			<!-- :current-page -->
			<el-pagination @current-page=page :current-page="currentPage" :page-size="pageSize" :page-sizes="[10,20,40]" :total="total">

			</el-pagination>
		</div>
	</div>
</template>

<script>
	import Header from "../components/Header";
	export default {
		name: 'Blogs.vue',
		components: {
			Header
		},
		data() {
			return {
				blogs: {},
				currentPage: 1,
				total: 0,
				pageSize: 5

			}
		},
		methods: {
			page(currentPage) {
				const _this = this
				this.$axios.get('blogs?currentPage=' + currentPage).then(res => {
					console.log(res)
					_this.blogs = res.data.data.records
					_this.total = res.data.data.total
					_this.currentPage = res.data.data.page
					_this.pageSize = res.data.data.size
				})
			}
		},
		created() {
			this.page(1)
		}
	}
</script>

<style>
</style>
