<?php

use App\Http\Controllers\Api\V1\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::prefix('v1')->group(function () {
//     Route::post('login', [AuthController::class, 'login']);
// });

Route::group([

    'middleware' => 'api',
    'prefix' => 'v1/auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    // Route::post('logout', 'AuthController@logout');
    // Route::post('refresh', 'AuthController@refresh');
    // Route::post('me', 'AuthController@me');
});