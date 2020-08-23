<template>
  <header>
    <nav class="mobile-bottom-nav">
      <div class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <router-link :to="{name: 'home'}"><i class="material-icons">home</i>
          Home</router-link>
        </div>    
      </div>
      <div class="mobile-bottom-nav__item">   
        <div class="mobile-bottom-nav__item-content">
          <router-link :to="{name: 'place_order'}"><i class="material-icons">add_shopping_cart</i>
          Place Order</router-link>
        </div>
      </div>
      <div class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <router-link :to="{name: 'products'}"><i class="material-icons">bubble_chart</i>
          Products</router-link>
        </div>    
      </div>
      <div class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <router-link :to="{name: 'supplies'}"><i class="material-icons">content_paste</i>
          Supplies</router-link>
        </div>    
      </div>
      
      <div class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <router-link :to="{name: 'logout'}"><i class="material-icons">exit_to_app</i>
          Logout</router-link>
        </div>    
      </div>
    </nav>

    <nav class="main-nav">
      <a href="index.html"> <img src="/img/freshbuys-logo.png"> </a>
      <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'place_order'}">Place Order</router-link></li>
        <li><router-link :to="{name: 'products'}">Products</router-link></li>
        <li><router-link :to="{name: 'supplies'}">Supplies</router-link></li>
        <li><router-link :to="{name: 'logout'}">Logout</router-link></li>
      </ul>
      <div class="user-profile">
        <a href="#"> <img src="/img/strawberry-mascot.png"> </a>
      </div>
    </nav>
  </header>
</template>