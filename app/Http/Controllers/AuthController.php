<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){
    	$http = new \GuzzleHttp\Client;

    	try{
    		$response = $http->post(config('services.passport.login_endpoint'),[
    			'form_params'=>[
    				'grant_type'=>'password',
    				'client_id'=>config('services.passport.login_client_id'),
    				'client_secret'=>config('services.passport.login_client_secret'),
    				'username'=> $request->username,
    				'password'=> $request->password,
                    'isAdmin' => 1,
                    'status' => 1,
    			]
    		]);

    		return $response->getBody();
    	}catch(\Guzzlehttp\Exception\BadResponseException $e){
    		if($e->getCode() === 405){
                return response()->json('Method not Allowed.', $e->getCode());
            }else{
                return response()->json(['error'=>'Invalid username or password.'], $e->getCode());
            }

    		return $response->json('Server error.', $e->getCode());
    	}
    }

    public function logout(){
    	auth()->user()->tokens->each(function($token, $key){
    		$token->delete();
    	});

    	return response()->json('Logged out successfully',200);
    }
}
