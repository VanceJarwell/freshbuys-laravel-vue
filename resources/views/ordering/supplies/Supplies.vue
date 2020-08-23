<template>
	<div class="container">
    <div class="row">

      <div class="col-lg-4">
        <router-link :to="{name: 'supplies_add'}">
          <div class="info-box mr-5">
            <span class="info-box-icon bg-green"><i class="fas fa-pencil-ruler"></i></span>
            <div class="info-box-content">
              <p class="info-box-number">Add Supplies</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="col-lg-4">
        <router-link :to="{name: 'supplies_record'}">
          <div class="info-box mr-5">
            <span class="info-box-icon bg-orange"><i class="far fa-clipboard"></i></span>
            <div class="info-box-content">
              <p class="info-box-number">Supplies Records</p>
            </div>
          </div>
        </router-link>
      </div>  
      
    </div>
  </div>
</template>

<script>

	export default {
	    data:function() {
	      return {
            supplies: []
            
	      }
      },
      computed:{
        
      },
      methods: {
        
      },
      created() {
        
      },
      mounted(){
        this.$store.dispatch('getSuppliesData')
        .then(response => {
          this.supplies = response;
        }) 
      },
      beforeDestroy(){

      }
	}
</script>