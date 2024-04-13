<?php

use App\Http\Controllers\BounceController;
use App\Http\Controllers\FlightController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\ProjectileThrowController;
use Illuminate\Http\Request;
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

Route::post('start-game', [GameController:: class, 'startGame']);
Route::post('game-over', [GameController::class, 'endGame']);

Route::post('save-throw', [ProjectileThrowController::class, 'create']);

Route::post('in-flight', [FlightController::class, 'create']);

Route::post('bounce',  [BounceController::class, 'create']);
