import _ from './node_modules/lodash'
import Vue from 'vue/dist/vue.esm'
import Velocity from './node_modules/lodash'
import 'style-loader!css-loader!animate.css'

import Permutations from './permutations'
import R from './rythme'

import "style-loader!css-loader!./style.css"

global.p = Permutations;
var r = new R(8,[4,5],1,6);
console.log(r);
//debug


new Vue({
	el:"#app",
	data: {
		res : r,
		currentScale: -1,
		modes: []
	},
	methods:{
		permute(array){
			var res = Permutations(array);
			return res
		},
		addMode(mode){
			var index = this.modes.indexOf(mode);
			if(index == -1){
 			  this.modes.push(mode)
			} else{
				this.modes.splice(index,1)
			} 
		}
	},
	watch:{
		'res.lengths': function(){
			this.res.update();
		},
		'res.resolution': function(){
			this.res.update();
		},
		'res.max': function(){
			this.res.update();
		},
		'res.min': function(){
			this.res.update();
		}
	},
	template:`

	<div>

		<div id="log">
			{{ res }}
		</div>

		<div id="object">
			<div id="resolution">
				<label>resolution</label>
				<input v-model.number = "res.resolution" type="number"/>
			</div>
			<div id="lengths">
				<label> lengths : </label>
				<span v-for='n in res.resolution' >
					<span>{{n}}</span>
					<input type="checkbox" v-model='res.lengths' :value="n" />
				</span>
			</div>
			<div id="minmax">
				min	<input min=1 :max="res.max-1" type="number" v-model.number="res.min" />
				max	<input :max="res.resolution" :min="res.min+1" type="number" v-model.number="res.max" />
			</div>
			<div id="res">
				scales : 
				<div id="scales" v-for='scale,k in res.final'>
					<button @click="currentScale==k ? currentScale =-1 : currentScale=k"> {{ scale }} </button>
					<transition-group
							enter-active-class='animated fadeIn'					  
							leave-active-class='animated fadeOut'					  
						>
							<div id="modes" v-for='mode,kk in permute(scale)' :key="mode"
								v-if='currentScale==k'
								@click="addMode(mode)"
								:style='{backgroundColor : modes.indexOf(mode)!=-1 ? "green" : "blue"}'
							>
							{{ mode }}
						</div>
					</transition-group>
				</div>
			</div>
		</div>

	</div>
	`
})