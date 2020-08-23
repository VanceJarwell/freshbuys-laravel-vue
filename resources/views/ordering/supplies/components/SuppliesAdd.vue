<template>
  <div class="container">

    <div class="row p-2">
      <div class="col-8">
        <h3>Add Supplies <i class="fas fa-pencil-ruler bg-green"></i></h3>
      </div>
      <div class="col-4">
        <router-link :to="{name: 'supplies'}">
          <button type="submit" class="btn btn-primary w-100">Back</button>
        </router-link>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12 border-right border-left">
        <form action="" v-on:submit.prevent="addSupplies()">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="suppliesDate" class="text-muted">Date of Purchase:</label>
              <input type="date" class="form-control" id="suppliesDate" placeholder="Date" v-model="form.date" required>
            </div>
            <div class="form-group col-md-6">
              <label for="supplierName" class="text-muted">Supplier Name:</label>
              <select id="add-product" class="form-control text-muted bg-green" v-model="form.supplierName">
                <option selected hidden=True value="">Choose Supplier</option>
                <option v-for="name in suppliers" :key="name.id">{{name.supplier_name}}</option>
              </select>
            </div>
          </div>
          <div class="table-head-color mb-3 p-2">Product Details</div>
          <div class="form-row">
            <div class="form-group col-lg-4">
              <label for="product" class="text-muted">Select Product:</label>
              <div class="input-group mb-3" id="product">
                <div class="input-group-prepend">
                  <select id="add-product" class="form-control text-muted bg-green" v-model="form.productName">
                    <option selected hidden=True value="">Choose Product</option>
                    <option v-for="product in productCategories" :key="product.id">{{product}}</option>
                  </select>
                </div>
                <span class="input-group-text">or</span>
                <input type="text" class="form-control" id="add-product" placeholder="Add new product" min=0 v-model="form.productName" required>
              </div>
            </div>
            <div class="form-group col-lg-3">
              <label for="add-qty" class="text-muted">Product Quantity:</label>
              <div class="input-group">
                <input type="number" class="form-control" id="add-qty" placeholder="Qauntity" min=0 v-model="form.qty" required>
                <div class="input-group-append">
                  <div class="input-group-text">kg</div>
                </div>
              </div>
            </div>
            <div class="form-group col-lg-3">
              <label for="price" class="text-muted">Total Price:</label>
              <div class="input-group mb-3" id="price">
                <div class="input-group-prepend">
                  <span class="input-group-text">₱</span>
                </div>
                <input type="number" class="form-control" id="add-price" placeholder="Price" min=0 v-model="form.price" required>
              </div>
            </div>
            <div class="form-group col-lg-2">
              <label for=""></label>
              <button type="submit" class="btn btn-primary w-100 mt-1">Add</button>
            </div>
          </div>
        </form>

        <div class="table-responsive">
          <table class="table border-left border-right text-center">
            <thead class="table-head-color">
              <tr>
                <th scope="col" class="text-left">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Purchase Date</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody v-for="supply in supplies" :key="supply.id">
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
          form: {
            date: '',
            supplierName: '',
            qty: '',
            price: '',
            productName: '',
          },
          supplies: [],
          suppliers: [],
          interval: ''
	      }
      },
      computed:{
        productCategories () {
          return [...new Set(this.supplies.map(({ product_name }) => product_name))]
        }
      },
      methods: {
        addSupplies(){
          this.$store.dispatch('addSuppliesData', {data: this.form})
        },

        getSuppliesData(){
          this.$store.dispatch('getSuppliesData')
          .then(response => {
            this.supplies = response;
          })
        },

        getSuppliersData(){
          this.$store.dispatch('getSuppliesSupplierData')
          .then(response => {
            this.suppliers = response;
          })
        }
      },
      created() {
        this.getSuppliesData()
        this.getSuppliersData()
      },
      mounted(){
        this.interval = setInterval(this.getSuppliesData, 5000)
        this.interval = setInterval(this.getSuppliersData, 5000)
      },
      beforeDestroy(){
        clearInterval(this.interval)
      }
	}
</script>