<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ArtistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\TicketController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);
Route::get('events', [EventController::class, 'index']);
Route::get('events/{id}', [EventController::class, 'show']);
Route::get('/events/current-month', [EventController::class, 'getEventsInCurrentMonth']);

Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::post('events', [EventController::class, 'store']);
    Route::put('events/{id}', [EventController::class, 'update']);
    Route::delete('events/{id}', [EventController::class, 'destroy']);
    Route::post('/logout',[AuthController::class, 'logout']);

    Route::prefix('artists')->group(function () {
        Route::post('/', [ArtistController::class, 'store']);    // Create artist
        Route::get('/', [ArtistController::class, 'index']);     // List all artists
        Route::get('/{id}', [ArtistController::class, 'show']);  // Get single artist
        Route::put('/{id}', [ArtistController::class, 'update']); // Update artist
        Route::delete('/{id}', [ArtistController::class, 'destroy']); // Delete artist
    });

    Route::post('/bookings', [BookingController::class, 'store']);
    Route::get('/my-bookings', [BookingController::class, 'getMyBookings']);
    Route::get('event-types', [EventController::class, 'getEventTypes']);
    Route::get('artists', [ArtistController::class, 'index']);
    Route::get('tickets', [TicketController::class, 'index']);

});