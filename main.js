import _ from './node_modules/lodash'
import Vue from 'vue/dist/vue.esm'
import Velocity from './node_modules/lodash'

// style
import "style-loader!css-loader!./style.css"
import 'style-loader!css-loader!animate.css'

//main
import VueX from 'vuex'
import store from './store'
Vue.use(VueX);
const store = new VueX.Store({
	getters:{
		all(s,getters){
			console.log(getters);
			return s
		}
	}
});

import Router from 'vue-router'
Vue.use(Router)
import router from './router'

new Vue({
	el:"#app",
	router,
	store,
	data:{children:[]},
	created(){
	},
	template:`
	<div>
		<router-view ref='io'></router-view>
		<p>{{this.$store.getters.all}}</p>
	</div>
	`
})
