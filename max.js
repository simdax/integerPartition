export default{

	max (array) {
		var res;
		for (var i = 0; i < array.length; i++) {
			var el = array[i];
			if (res) {
				if (el > res) {res=el}
			}else{
				res = el;
			}
		}
		return res;
	},
	min (array) {
		var res;
		for (var i = 0; i < array.length; i++) {
			var el = array[i];
			if (res) {
				if (el < res) {res=el}
			}else{
				res = el;
			}
		}
		return res;
	}

}