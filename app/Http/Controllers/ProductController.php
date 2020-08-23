<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Products;

class ProductController extends Controller
{
    public function index()
    {

        return Products::all();
        
    }

    public function store(Request $request)
    {

        $product = new Products();
 
        $product->product_name = $request->productName;
 
        $product->quantity = $request->qty;
 
        $product->price = $request->price;

        $product->date_of_purchase = $request->date;
 
        $product->supplier_name = $request->supplierName;
 
        $product->save();
        
    }
}
