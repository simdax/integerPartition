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