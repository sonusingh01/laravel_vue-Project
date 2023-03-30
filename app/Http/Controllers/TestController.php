<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class TestController extends Controller
{
    public function controllerMethod(){
        return response()->json([
            'msg' => 'we should only return json'
        ]);
    }

    
}