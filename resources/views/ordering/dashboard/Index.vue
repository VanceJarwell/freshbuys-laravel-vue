<template>
	<div class="container">
      <h3 class="mb-3"> Order Summary </h3>
      <div class="summary-block">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div class="info-box">
                <span class="info-box-icon bg-green"> <i class="fas fa-box"></i></span>
                <div class="info-box-content">
                  <p class="info-box-text">New Orders</p>
                  <p class="info-box-number">15</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div class="info-box">
                <span class="info-box-icon bg-orange"><i class="fas fa-carrot"></i></span>

                <div class="info-box-content">
                  <p class="info-box-text">Products Sold</p>
                  <p class="info-box-number">365</p>
                </div>
              </div>
            </div>

            <div class="clearfix visible-sm-block"></div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div class="info-box">
                <span class="info-box-icon bg-green"> <i class="fas fa-chart-line"></i> </span>

                <div class="info-box-content">
                  <p class="info-box-text">Sales </p>
                  <p class="info-box-number">15,675</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div class="info-box">
                <span class="info-box-icon bg-orange"> <i class="fas fa-boxes"></i></span>

                <div class="info-box-content">
                  <p class="info-box-text">Total Orders</p>
                  <p class="info-box-number">200</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header"> Product Orders </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col" class="">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-title="Product Name">Ube Halaya Premium</th>
                        <td data-title="Quantity">10</td>
                      </tr>
                      <tr>
                        <td data-title="Product Name">Ube Halaya Premium</th>
                        <td data-title="Quantity">10</td>
                      </tr>
                      <tr>
                        <td data-title="Product Name">Ube Halaya Premium</th>
                        <td data-title="Quantity">10</td>
                      </tr>
                      <tr>
                        <td data-title="Product Name">Ube Halaya Premium</th>
                        <td data-title="Quantity">10</td>
                      </tr>
                      <tr>
                        <td data-title="Product Name">Ube Halaya Premium</th>
                        <td data-title="Quantity">10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-8">
            <div class="card">
              <div class="card-header"> Recent Orders <span> <a href="records.html">View all Orders ></a></span></div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity </th>
                        <th scope="col">Price </th>
                        <th scope="col" class="text-right">Actions </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-title="ID">0001</th>
                        <td data-title="Date"> June 18, 2020 </td>
                        <td data-title="Customer Name">Juan Dela Cruz</th>
                        <td data-title="Product Name">Ube Halaya</td>
                        <td data-title="Quantity">10 </td>
                        <td data-title="Price"> P150.00 </td>
                        <td data-title="Actions:" class="text-right"><a href="#"><span class="material-icons">visibility</span></a></td>
                      </tr>
                      <tr>
                        <td data-title="ID">0001</th>
                        <td data-title="Date"> June 18, 2020 </td>
                        <td data-title="Customer Name">Juan Dela Cruz</th>
                        <td data-title="Product Name">Ube Halaya</td>
                        <td data-title="Quantity">10 </td>
                        <td data-title="Price"> P150.00 </td>
                        <td data-title="Actions:" class="text-right"><a href="#"><span class="material-icons">visibility</span></a></td>
                      </tr>
                      <tr>
                        <td data-title="ID">0001</th>
                        <td data-title="Date"> June 18, 2020 </td>
                        <td data-title="Customer Name">Juan Dela Cruz</th>
                        <td data-title="Product Name">Ube Halaya</td>
                        <td data-title="Quantity">10 </td>
                        <td data-title="Price"> P150.00 </td>
                        <td data-title="Actions:" class="text-right"><a href="#"><span class="material-icons">visibility</span></a></td>
                      </tr>
                      <tr>
                        <td data-title="ID">0001</th>
                        <td data-title="Date"> June 18, 2020 </td>
                        <td data-title="Customer Name">Juan Dela Cruz</th>
                        <td data-title="Product Name">Ube Halaya</td>
                        <td data-title="Quantity">10 </td>
                        <td data-title="Price"> P150.00 </td>
                        <td data-title="Actions:" class="text-right"><a href="#"><span class="material-icons">visibility</span></a></td>
                      </tr>
                      <tr>
                        <td data-title="ID">0001</th>
                        <td data-title="Date"> June 18, 2020 </td>
                        <td data-title="Customer Name">Juan Dela Cruz</th>
                        <td data-title="Product Name">Ube Halaya</td>
                        <td data-title="Quantity">10 </td>
                        <td data-title="Price"> P150.00 </td>
                        <td data-title="Actions:" class="text-right"><a href="#"><span class="material-icons">visibility</span></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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