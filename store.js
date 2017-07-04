export default {
	namespaced:true,
	state(){
		return {
			modes:[]
		}
	},
	getters:{
		modes: s => s.modes
	},
	mutations:{
		SET_MODES(s,val){
			s.modes = val
		}
	}
}