<?php

use Illuminate\Http\Request;

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

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
Route::get('/v1/etherealtales/{id?}', 'EtherealTales@index');
Route::post('/v1/etherealtales', 'EtherealTales@store');
Route::post('/v1/etherealtales/{id}', 'EtherealTales@update');
Route::delete('/v1/etherealtales/{id}', 'EtherealTales@destroy');