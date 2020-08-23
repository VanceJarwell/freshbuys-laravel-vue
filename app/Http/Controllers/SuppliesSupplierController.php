<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\SuppliesSupplier;

class SuppliesSupplierController extends Controller
{
    public function supplies_supplier()
    {
        return SuppliesSupplier::all();
    }
}
