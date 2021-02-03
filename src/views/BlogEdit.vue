<template>
	<div>
		<Header></Header>


		<el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-form">
			<el-form-item label="标题" prop="title">
				<el-input type="input" v-model="form.title" autocomplete="off" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item label="摘要" prop="description">
				<el-input type="input" v-model="form.description" autocomplete="off" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item label="内容" prop="content">
				<mavon-editor v-model="form.content"></mavon-editor>
			</el-form-item>
			<el-button type="primary" @click="submitForm('form')">立即创建</el-button>
			<el-button type="primary" @click="resetForm('form')">取消</el-button>
		</el-form>
	</div>
</template>

<script>
	import Header from '../components/Header.vue'
	export default {
		name: 'BlogEdit.vue',
		components: {
			Header
		},

		data() {
			return {
				form: {
					id: '',
					title: '',
					description: '',
					content: ''
				},
				rules: {
					tile: [{
							required: true,
							message: "请输入标题",
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: "请输入3到25个字符",
							trigger: 'blur'
						}
					],
					description: [{
						required: true,
						message: "请输入摘要",
						trigger: 'blur'
					}],
					content: [{
						required: true,
						message: "请输入内容",
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			submitForm(form) {
				this.$refs[form].validate((valid) => {
					if (valid) {
						const _this = this
						this.$axios.post("/blog/edit", this.form, {
							header: {
								Authorization: localStorage.getItem("token")
							}
						}).then(res => {
							console.log(res)
							_this.$alert('操作成功', '提示', {
								confirmButtonText: '确定',
								callback: action => {
									_this.$router.push("/blogs")
								}
							})
						})
					} else {
						console.log('error submit')
						return false;
					}
				});
			},
			resetForm(form) {
				this.$refs[form].resetFields();
			}
		}
	}
</script>

<style>
</style>
