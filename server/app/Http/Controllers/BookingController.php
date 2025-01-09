<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Ticket;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'ticket_id' => 'required|exists:tickets,id',
            'quantity' => 'required|integer|min:1',
        ]);

        // Fetch the ticket
        $ticket = Ticket::findOrFail($validated['ticket_id']);

        // Create the booking
        $booking = Booking::create([
            'ticket_id' => $ticket->id,
            'user_id' => auth()->id(), // Ensure user is authenticated
            'quantity' => $validated['quantity'],
        ]);

        return response()->json([
            'message' => 'Ticket booked successfully.',
            'booking' => $booking,
        ], 201);
    }
    public function getMyBookings()
    {
        $userId = auth()->id();

        $bookings = Booking::with(['ticket.event'])->where('user_id', $userId)->get();

        return response()->json([
            'message' => 'Bookings retrieved successfully.',
            'bookings' => $bookings,
        ]);
    }
}