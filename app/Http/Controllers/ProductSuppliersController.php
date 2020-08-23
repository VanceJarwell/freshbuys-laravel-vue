<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\ProductSuppliers;

class ProductSuppliersController extends Controller
{
    public function product_supplier()
    {
        return ProductSuppliers::all();
    }
}
