<template>
	<div>
		<div id="loader" v-if="!$store.state.isLoaded"></div>

	    <div id="backend" v-if="loggedIn" >
	    	<navmenu/>
	    	<main id="main-panel" class="main-panel">		    
		    	<transition name="fade">
						<router-view v-if="$store.state.isLoaded"></router-view>
					</transition>
				</main>
			<footer/>
	    </div>
	    <div id="content" class="wrapper fade-animate" v-else >
	    	<div class="wrap fade-animate">
		    	<transition name="fade">
				    <router-view  v-if="$store.state.isLoaded"></router-view>
				</transition>
			</div>
			<footer/>
	    </div>
	    
	    <modal name="appModal" @before-open="beforeOpen"/>
		<notifications group="alert" style="top:10px; right:5px" />
	</div>
</template>
<script>
	import navmenu from './layout/Nav.vue'
	import appfooter from './layout/Footer.vue'
	
	export default {
		components:{
	    	navmenu,
				appfooter,
	    },
	    computed:{
	      loggedIn(){
	        return this.$store.getters.loggedIn
	      },
	      currentRouteName() {
	        return this.$route.name
				}
	    },
	    data(){
	    	return {
					user:'',
	    	}
	    },
	    methods: {
	      checkLogIn (event) {
	      	if((this.currentRouteName=='login' || this.currentRouteName=='forgotpassword' || this.currentRouteName=='resetpassword' || this.currentRouteName=='register') && this.loggedIn){
	      		this.$router.push({name: 'dashboard'})
	      	}
	      },
	      beforeOpen(){

	      },
	    },
	    created() {
	    	if(!this.loggedIn && !this.isFrontend){
		        this.$router.push({ name: 'login'})
		    }else if(this.loggedIn){
		    	this.$store.dispatch('userDetails')
			      .then(response=>{
			    })
		    }

		    //this.$store.dispatch('optionsAll')
	    },
	    mounted(){
	    	this.checkLogIn()
	    	this.$store.state.isLoaded = true
	    },
	}
</script>