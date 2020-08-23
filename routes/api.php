<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//LOGIN
Route::middleware('throttle')->group( function () {
	Route::post('/login', 'AuthController@login')->name('login');
});

Route::middleware('auth:api')->group(function(){
	Route::post('/logout','AuthController@logout')->name('logout');
	Route::get('/user/profile','UserController@profile')->name('user.profile');
	#DASHBOARD
	Route::get('/dashboard','HomeController@products')->name('dashboard');

	// PRODUCTS
	Route::get('/products','ProductController@index')->name('products');
	Route::post('/products/add','ProductController@store')->name('products.add');
	Route::get('/product/suppliers','ProductSuppliersController@product_supplier')->name('product.suppliers');

	// SUPPLIES
	Route::get('/supplies','SuppliesController@index')->name('supplies');
	Route::post('/supplies/add','SuppliesController@store')->name('supplies.add');
	Route::get('/supplies/suppliers','SuppliesSupplierController@supplies_supplier')->name('suppplies.suppliers');

});



