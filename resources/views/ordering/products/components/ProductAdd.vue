<template>
  <div class="container">

    <div class="row p-2">
      <div class="col-8">
        <h3>Add Product <i class="fas fa-seedling bg-green"></i></h3>
      </div>
      <div class="col-4">
        <router-link :to="{name: 'products'}">
          <button type="submit" class="btn btn-primary w-100">Back</button>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 border-right border-left">
        <form action="" v-on:submit.prevent="addProduct()">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="suppliesDate" class="text-muted">Date of Purchase:</label>
              <input type="date" class="form-control" id="suppliesDate" placeholder="Date" v-model="form.date" required>
            </div>
            <div class="form-group col-md-6">
              <label for="supplierName" class="text-muted">Supplier Name:</label>
              <select id="add-product" class="form-control text-muted" v-model="form.supplierName">
                    <option selected hidden=True value="">Choose supplier</option>
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
                  <select id="add-product" class="form-control text-muted" v-model="form.productName">
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
            <tbody v-for="product in products" :key="product.id">
              <tr id="{product.id}">
                <th id="productID" scope="row" data-title="ID: " class="text-left">{{product.id}}</th>
                <td id="productName" data-title="Product Name: ">{{product.product_name}}</td>
                <td id="productDate" data-title="Purchase Date: ">{{product.date_of_purchase | formatDate}}</td>
                <td id="productName" data-title="Supplier Name: ">{{product.supplier_name | capitalize}}</td>
                <td id="productQuantity" data-title="Quantity: ">{{product.quantity}}</td>
                <td id="productPrice" data-title="Price: ">₱ {{product.price}}</td>
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
      data: function () {
        return {
          form: {
            // products: [],
            productName: '',
            qty: '',
            price: '',
            date: '',
            supplierName: '',
          },
          products: [],
          suppliers: [],
          interval: ''
          
        }
      },
      methods: {
        addProduct(){
          this.$store.dispatch('addProductData', {data: this.form})
          
          // let product = document.getElementById('add-product')
          // let qty = document.getElementById('add-qty')
          // let price = document.getElementById('add-price')

		      // this.form.products.push({ id: product.options[product.selectedIndex].value, name: product.options[product.selectedIndex].text, price: price.value, qty: qty.value })

        },

        getProductData(){
          this.$store.dispatch('getProductData')
          .then(response => {
            this.products = response;
          })
        },

        getSuppliersData(){
          this.$store.dispatch('getProductSupplierData')
          .then(response => {
            this.suppliers = response;
          })
        }
      },
      computed: {
        productCategories () {
          return [...new Set(this.products.map(({ product_name }) => product_name))]
        }
      },
      created() {
        this.getProductData()
        this.getSuppliersData()
      },
      mounted(){
        this.interval =setInterval(this.getProductData, 5000)
        this.interval =setInterval(this.getSuppliersData, 5000)
        
        // this.$store.dispatch('saveOrder', {data: this.form})
      },
      beforeDestroy(){
        clearInterval(this.interval)
      }
	}
</script>