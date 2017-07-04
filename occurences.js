export default function(array) {

	var occurences = {};
	for (var i = 0; i < array.length; i++) {
		var el = array[i];
		if (occurences[el]) {
			occurences[el]++
		}else{
			occurences[el]=1;
		}
	}
	return occurences
}


export let count = function (occurences, rep=1) {
	for( var key in occurences ){
		if (occurences[key] > rep) {
			return true
		}
	}
	return false
}