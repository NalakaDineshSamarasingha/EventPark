<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\Artist;
use App\Models\EventType;
use App\Models\Ticket;
use Carbon\Carbon; 

class EventController extends Controller
{
    // Method to create a new event
    public function store(Request $request)
    {
        $validated = $request->validate([
            'event_name' => 'required|string|max:255',
            'place' => 'required|string|max:255',
            'event_date' => 'required|date',
            'event_time' => 'required|date_format:H:i:s',
            'event_type_id' => 'required|exists:event_types,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'artists' => 'nullable|array', // Expect an array of artist IDs
            'artists.*' => 'exists:artists,id',
            'tickets' => 'nullable|array', // Expect an array of ticket details
            'tickets.*.ticket_type' => 'required|string|max:255',
            'tickets.*.price' => 'required|numeric|min:0',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('events', 'public');
        }

        $event = Event::create([
            'event_name' => $request->event_name,
            'place' => $request->place,
            'event_date' => $request->event_date,
            'event_time' => $request->event_time,
            'event_type_id' => $request->event_type_id,
            'image' => $imagePath,
        ]);

        // $event->artists()->attach($validated['artists']);

        // foreach ($validated['tickets'] as $ticket) {
        //     Ticket::create([
        //         'event_id' => $event->id,
        //         'ticket_type' => $ticket['ticket_type'],
        //         'price' => $ticket['price'],
        //     ]);
        // }


        return response()->json(['message' => 'Event created successfully', 'event' => $event], 201);
    }

    // Method to get all events
    public function index()
    {
        $events = Event::with('eventType', 'tickets', 'artists')->get();
        return response()->json($events);
    }

    // Method to show a single event
    public function show($id)
    {
        $event = Event::with('eventType', 'tickets', 'artists')->find($id);
        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }
        return response()->json($event);
    }

    // Method to update an existing event
    public function update(Request $request, $id)
    {
        $event = Event::find($id);
        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        $request->validate([
            'event_name' => 'sometimes|string|max:255',
            'place' => 'sometimes|string|max:255',
            'event_date' => 'sometimes|date',
            'event_time' => 'sometimes|date_format:H:i:s',
            'event_type_id' => 'sometimes|exists:event_types,id',
        ]);

        $event->update($request->only([
            'event_name',
            'place',
            'event_date',
            'event_time',
            'event_type_id',
        ]));

        return response()->json(['message' => 'Event updated successfully', 'event' => $event]);
    }

    // Method to delete an event
    public function destroy($id)
    {
        $event = Event::find($id);
        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        $event->delete();

        return response()->json(['message' => 'Event deleted successfully']);
    }
    public function getEventTypes()
    {
        $eventTypes = EventType::all(); // Assuming you have an EventType model to handle event types.
        return response()->json($eventTypes);
    }
    public function getEventsInCurrentMonth()
    {
        $currentMonth = Carbon::now()->month; // Get current month
        $currentYear = Carbon::now()->year;  // Get current year

        $events = Event::with('eventType', 'tickets', 'artists')
            ->whereYear('event_date', $currentYear) // Filter by year
            ->whereMonth('event_date', $currentMonth) // Filter by month
            ->limit(4) // Limit to 4 events
            ->get();

        if ($events->isEmpty()) {
            return response()->json(['message' => 'No events found for the current month'], 404);
        }

        return response()->json($events);
    }

}