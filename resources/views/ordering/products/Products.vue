<template>
	<div class="container">
    <div class="row">

      <div class="col-lg-4">
        <router-link :to="{name: 'products_add'}">
          <div class="info-box mr-5">
            <span class="info-box-icon bg-green"><i class="fas fa-seedling"></i></span>
            <div class="info-box-content">
              <p class="info-box-number">Add Product</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="col-lg-4">
        <router-link :to="{name: 'products_record'}">
          <div class="info-box mr-5">
            <span class="info-box-icon bg-orange"><i class="far fa-clipboard"></i></span>
            <div class="info-box-content">
              <p class="info-box-number">Product Records</p>
            </div>
          </div>
        </router-link>
      </div>  

    </div>
	</div>
</template>

