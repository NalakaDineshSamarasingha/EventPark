<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    // Get all events
    public function index()
    {
        $events = Event::all();
        return response()->json($events);
    }

    // Create a new event
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'required|date',
            'end_time' => 'nullable|date',
            'location' => 'nullable|string|max:255',
        ]);

        $event = Event::create($validated);
        return response()->json($event, 201);
    }

    // Show a specific event by ID
    public function show($id)
    {
        $event = Event::findOrFail($id);
        return response()->json($event);
    }

    // Update an event by ID
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'required|date',
            'end_time' => 'nullable|date',
            'location' => 'nullable|string|max:255',
        ]);

        $event = Event::findOrFail($id);
        $event->update($validated);
        return response()->json($event);
    }

    // Delete an event by ID
    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return response()->json(null, 204);
    }
}