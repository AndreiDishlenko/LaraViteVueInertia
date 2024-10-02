<?php

use App\Http\Controllers\InertiaController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/inertia', function () {
    return InertiaController::show();
});

Route::get('/rozsuvni-vorota', function () {
    return MainController::index('Articles/vorota');
});

Route::get('/', function ( $locale="ua", $link="", $action="") {
	return MainController::index();
});