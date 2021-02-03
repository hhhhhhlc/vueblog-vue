import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: '',
		userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
	},
	mutations: {
		SET_USER: (state, userInfo) => {
			state.userInfo = userInfo,
			sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
		},
		SET_TOKEN: (state, token) => {
			state.token = token,
			localStorage.setItem("token", token)
		},
		REMOVE_USER: (state) => {
			state.userInfo = '',
			state.token = '',
			sessionStorage.setItem("userInfo", ""),
			localStorage.setItem("token", "")
		}
	},
	getters: {
		getUser: state => {
			return state.userInfo
		}
	},
	actions: {},
	modules: {}
})
