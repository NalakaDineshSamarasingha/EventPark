<?php

use App\Http\Controllers\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('events')->group(function () {
    Route::get('/', [EventController::class, 'index']); // Get all events
    Route::get('/{id}', [EventController::class, 'show']); // Get a specific event by ID
    Route::post('/', [EventController::class, 'store']); // Create a new event
    Route::put('/{id}', [EventController::class, 'update']); // Update an event
    Route::delete('/{id}', [EventController::class, 'destroy']); // Delete an event
});