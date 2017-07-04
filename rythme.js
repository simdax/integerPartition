import Occurences from './occurences'
import Partition from './partition'
import m from './max'
/// why is the import/export options so complicated ???
var max = m.max;
var min = m.min;

function Rythme(res,lengths,min,max,reps=0){
	
	///var declaration
	this.lengths = [];

	// setting
	this.resolution = res;
	this.setLengths(lengths);
	this.max = max;
	this.min = min;
	this.reps=reps;

	/// constructor
	this.update();

}

Rythme.prototype= {	

//setters
	setLengths(l){
		switch (typeof l ) {
			case 'object':
				if (Array.isArray(l)) {
					this.lengths = l;
				}else{
					for(var key in l){
						this.lengths.push(key);
						this.reps.push(l[key])
					}
				}
				break;
			default:
				this.lengths = [l]
				break;
		}
	},
//getters

// main
	conditions(el,length){
		return (el.length == length)
				&& (max(el) <= this.max)
				&& (min(el) >= this.min)
				&& (true) 
	},

	update(){

		/// partitioning
		this.res = [];
		for(var a of Partition.zs1(this.resolution)){
			this.res.push(a)
		}

		/// listing
		this.occurences=[];
		for (var i = 0; i < this.res.length; i++) {
			var el = this.res[i];
			this.occurences.push(Occurences(el))
		}

		/// filtering
		this.final = [];
		for (var i = 0; i < this.res.length; i++) {
			var el = this.res[i];
			for (var j = 0; j < this.lengths.length; j++) {
				// conditions
				if (this.conditions(el,this.lengths[j])) {
					this.final.push(el)
				}
			}
		}


	}
}	

export default Rythme