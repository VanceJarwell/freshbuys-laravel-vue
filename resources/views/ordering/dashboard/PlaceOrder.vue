<template>
	<div class="container">
    <h1>Place Order</h1>
  </div>
</template>

<script>

	export default {
	    data:function() {
	      return {
            interval: '',
	      }
	    },
      methods: {
        
      },
      created() {
        
      },
      mounted(){
        
      },
      beforeDestroy(){
        clearInterval(this.interval)
      }
	}
</script>