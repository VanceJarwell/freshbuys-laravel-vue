<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class UserController extends Controller
{
    public function profile(Request $request){
		try{        

	      	$user = User::where('id', auth()->user()->id)->first();
		   	return $user;

	    }catch(\Guzzlehttp\Exception\BadResponseException $e){

	    	return response()->json('Updated failed.',$e);
	      
	    }
	}

}
