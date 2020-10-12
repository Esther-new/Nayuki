import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import addresses from '@/api/addresses'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		store:{},
		cart:[],
		address:{},
		addresses:addresses,
		orderType:"takein",
		member:{},
		order:{}	
	},
	getters:{
		// 是否登录
		isLogin:state=>Object.keys(state.member).length > 0 
	},
	mutations:{
		SetOrderType(state,type){
			state.orderType=type;
		},
		SetMember(state,member){
			state.member = member;
		},
		SetAddress(state,address){
			state.address = address;
		},
		SetAddresses(state,addresses){
			state.addresses = addresses;
		},
		SetOrder(state,order){
			state.order = order;
		},
		SetCart(state,cart){
			state.cart = cart;
		},
		RemoveCart(state){
			state.cart = [];
		}
		SetStore(state,store){
			state.store = store;
		}
		
	},
	actions:{
		async getStore({commit}){
			const store = await api('store');
			commit('SetStore',store);
		}
	}
})