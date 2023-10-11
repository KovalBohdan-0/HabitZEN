<?php

use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\HabitController;
use App\Http\Controllers\API\ProgressController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::post('refresh', 'refresh');
    Route::post('logout', 'logout');
});

Route::controller(HabitController::class)->group(function () {
    Route::get('habits', 'index');
    Route::get('habits/{id}', 'show');
    Route::post('habits', 'store');
    Route::put('habits/{id}', 'update');
    Route::delete('habits/{id}', 'delete');
});

Route::controller(ProgressController::class)->group(function () {
    Route::get('progress/habit/{habit_id}', 'index');
    Route::get('progress/{id}', 'show');
    Route::post('progress', 'store');
    Route::put('progress/{id}', 'update');
    Route::delete('progress/{id}', 'delete');
});

