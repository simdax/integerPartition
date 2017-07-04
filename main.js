import _ from './node_modules/lodash'
import Vue from 'vue/dist/vue.esm'
import R from './rythme'

import "style-loader!css-loader!./style.css"

var r = new R(8,[5,4],6,1)

//debug
global.r = r 
global._ = _ 


new Vue({
	el:"#app",
	data: {res : r},
	methods:{
		update(){
			this.res.update()
		},
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
	function Rythme(res,nb,occ,rep,valFilter)
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
				<button v-for='n in res.final'>
					{{n}}
				</button>
			</div>
		</div>

	</div>
	`
})