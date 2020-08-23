<template>
  <div class="container">

    <div class="row p-2">
      <div class="col-8">
        <h3>Supplies Record <i class="far fa-clipboard bg-orange"></i></h3>
      </div>
      <div class="col-4">
        <router-link :to="{name: 'supplies'}">
          <button type="submit" class="btn btn-primary w-100">Back</button>
        </router-link>
      </div>
    </div>

    <div class="table-responsive">
      <div class="col">
        <form action="" @submit.prevent="inputClear" class="mt-2">
          <div class="form-row">
            <div class="col-md-4 pb-3">
              <label for="productSearch" class="text-muted">Search Filter:</label>
              <input type="text" class="form-control" id="productSearch" placeholder="Search" min=0 v-model="search">
            </div>
            <div class="col-md-3 pb-3">
              <label for="productDate" class="text-muted">Date Filter:</label>
              <input type="date" class="form-control" id="productDate" placeholder="Date" min=0 v-model="searchDate">
            </div>
            <div class="col-md-3 pb-3 ">
              <label for="arrangeBy" class="text-muted">Arrange by:</label>
              <select id="" class="form-control text-muted" v-model="currentSort">
                <option value="id">ID</option>
                <option value="product_name">Product Name</option>
                <option value="date_of_purchase">Purchase Date</option>
                <option value="supplier_name">Supplier Name</option>
                <option value="quantity">Quantity</option>
                <option value="price">Price</option>
              </select>
            </div>
            <div class="col-md-2 pb-3 ">
              <label for="productDate" class="text-muted "></label>
              <button class="btn btn-primary w-100 mt-1">Clear</button>
            </div>
          </div>
        </form>

        <div class="row">
          <table class="table border-left border-right text-center">
            <thead class="table-head-color text-center">
              <tr>
                <th scope="col" class="text-left">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Purchase Date</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody v-for="supply in sortedProducts" :key="supply.id">
              <tr id="{supply.id}">
                <th id="supplierID}" scope="row" data-title="ID: " class="text-left">{{supply.id}}</th>
                <td id="suppliesName" data-title="Product Name: ">{{supply.product_name}}</td>
                <td id="suppliesDate" data-title="Purchase Date: ">{{supply.date_of_purchase | formatDate}}</td>
                <td id="supplierName" data-title="Supplier Name: ">{{supply.supplier_name | capitalize}}</td>
                <td id="suppliesQuantity" data-title="Quantity: ">{{supply.quantity}}</td>
                <td id="suppliesPrice" data-title="Price: ">₱ {{supply.price}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

	export default {
	    data:function() {
	      return {
            supplies: [],
            currentSort: 'name',
            currentSortDir: 'asc',
            search: '',
            searchDate: '',
            interval: ''
	      }
      },

      methods: {
        inputClear: function(event) {
          this.search = this.searchDate = '';
          this.currentSort = 'id';
          event.target.reset();
        },

        getSuppliesData(){
          this.$store.dispatch('getSuppliesData')
          .then(response => {
            this.supplies = response;
          }) 
        },

        sort: function(s) {
          if(s == this.currentSort) {
            this.currentSortDir = this.currentSortDir === 'asc';
          }
          this.currentSort = s;
        }
        
      },

      computed:{
        filteredRows(){
          return this.supplies.filter(supply => {
            const id = supply.id.toString();
            const supplier_name = supply.supplier_name.toLowerCase();
            const quantity = supply.quantity.toString().toLowerCase();
            const price = supply.price.toString().toLowerCase();
            const date = supply.date_of_purchase.toString();
            const searchTerm = this.search.toLowerCase();
            
            return id.includes(searchTerm) ||
            supplier_name.includes(searchTerm) ||
            quantity.includes(searchTerm) ||
            price.includes(searchTerm) ||
            date.includes(searchTerm);

          });
        },

        filteredDate(){
          return this.filteredRows.filter( supply => {
            const searchDate = this.searchDate;
            const date = supply.date_of_purchase;

            return date.includes(searchDate);
          })
        },

        sortedProducts:function() {
          return this.filteredDate.sort((a,b) => {
            let modifier = 1;
            if(this.currentSortDir === 'desc') modifier = -1;
            if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
            if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
            return 0;
          })
        }


      },
      
      created() {
        this.getSuppliesData()
      },
      mounted(){
        this.interval = setInterval(this.getSuppliesData, 5000)
        this.currentSort = 'id'
      },
      beforeDestroy(){
        clearInterval(this.interval)
      }
	}
</script>