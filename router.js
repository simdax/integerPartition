import Router from 'vue-router'
import partition from 'vue-loader!./partition.vue'

const router = new Router({
	// mode: "history",
	routes:[{
		path:"/", components:{
			default: {
				data(){
					return{
						view:'mel'
					}
				},
				methods:{
					switchView(){
						switch (this.view) {
							case 'mel':
								this.view = 'rythme'
								break;
							case 'rythme':
								this.view = 'scale'
								break;
							default:
								this.view = 'mel'
								break;
						}
					}
				},
				components: {
					mel:partition,
					rythme:partition,
					scale:partition,
				},
				template:`
					<div>
						<transition>
							<div>
								<keep-alive :key='view'>
									<component :is='view' @switch='switchView' :title='view'></component>
								</keep-alive>
							</div>
						</transition>
					</div>
				`
			}
		}
	}]
})

export default router 
