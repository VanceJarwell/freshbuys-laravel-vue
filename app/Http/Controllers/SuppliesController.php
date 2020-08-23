<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Supplies;

class SuppliesController extends Controller
{
    public function index()
    {
        return Supplies::all();
    }

    public function store(Request $request)
    {

        $supplies = new Supplies();
 
        $supplies->date_of_purchase = $request->date;
 
        $supplies->supplier_name = $request->supplierName;

        $supplies->quantity = $request->qty;

        $supplies->price = $request->price;

        $supplies->product_name = $request->productName;
 
        $supplies->save();
        
    }
}
