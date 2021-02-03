<template>
	<div>
		<el-container>
			<el-main>
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
					<h3 align="center">系统登录</h3>
					<el-form-item label="用户名" prop="username">
						<el-input v-model="ruleForm.userName"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" v-model="ruleForm.password"></el-input>
					</el-form-item>
					<div></div>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>

				</el-form>
			</el-main>

		</el-container>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				ruleForm: {
					username: 'markerhub',
					password: ''
				},
				rules: {
					username: [
						{required: true, message: "请输入账号", trigger: 'blur'}
						],
					password: [
						{required: true, message: "请输入密码", trigger: 'change'},
					],
					            
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					//debugger
					if (valid) {
						//console.log(this)
						const _this = this
						//console.log(this)
						//debugger
						this.$axios.post('user/login', this.ruleForm).then(res => {
						  console.log(res.data)
						  const jwt = res.headers['authorization']
						  debugger
						  const userInfo = res.data.data
						console.log('--------------------1')
						  // 把数据共享出去
						  _this.$store.commit("SET_TOKEN", jwt)
						  _this.$store.commit("SET_USER", userInfo)
						  debugger
						  console.log('--------------------1')
						  // 获取
						  console.log(_this.$store.getters.getUser)
						
						  _this.$router.push("/blogs")
						}).catch(e => {
							console.log(e)
						})
						//alert('submit!');
					} else {
						console.log(this.ruleForm.password);
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}

	}
</script>

<style>
	div {
		text-align: center;
	}
</style>
