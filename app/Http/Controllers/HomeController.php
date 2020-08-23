<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Products;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('spa');
    }

    public function dashboard(){
    	// $data['next_delivery_items'] = OrderItem::selectRaw('order_items.name, order_items.weight, sum(order_items.quantity) as qty')->where('orders.delivery_date', '<=' , date('Y-m-d', strtotime('+6 days')))
        // ->where('orders.delivery_date', '>=' , date('Y-m-d'))
        // ->where('orders.deleted_at', null)
        // ->whereIn('orders.status', [2,3,4])
        // ->leftJoin('orders','order_items.order_id','orders.id')
        // ->groupBy('order_items.name')
        // ->get();

    	// $data['new_order_count'] = Orders::where('delivery_date', '<=' , date('Y-m-d', strtotime('+6 days')))
        // ->where('delivery_date', '>=' , date('Y-m-d'))
        // ->count();

        // $data['total_order_count'] = Orders::count();
        // $data['new_order_paid_count'] = Orders::where('delivery_date', '<=' , date('Y-m-d', strtotime('+6 days')))
        // ->where('delivery_date', '>=' , date('Y-m-d'))
        // ->whereIn('orders.status', [2,3,4])
        // ->count();

        // $sales = Orders::selectRaw('sum(total_paid_tax_incl + total_shipping_tax_incl) as sum')->whereBetween('delivery_date', [date('Y-m-01'),date('Y-m-t')])
        // ->whereIn('status',[2,3,4,5])
        // ->first();
        // $data['sales'] = $sales->sum;

        // $data['recent_orders'] = Orders::where('delivery_date', '<=' , date('Y-m-d', strtotime('+6 days')))
        // ->where('delivery_date', '>=' , date('Y-m-d'))
        // ->limit(5)
        // ->orderBy('created_at','desc')
        // ->get();

        
        // return $data;
    }
}
