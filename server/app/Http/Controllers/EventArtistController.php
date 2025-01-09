<?php

use App\Http\Controllers\Controller;
use App\Models\Artist;
use App\Models\Event;

class EventArtistController extends Controller
{
    public function attachArtistToEvent($eventId, $artistId)
    {
        $event = Event::findOrFail($eventId);
        $artist = Artist::findOrFail($artistId);

        // Attach artist to the event
        $event->artists()->attach($artistId);

        return response()->json(['message' => 'Artist attached to event successfully.']);
    }

    public function detachArtistFromEvent($eventId, $artistId)
    {
        $event = Event::findOrFail($eventId);

        // Detach artist from the event
        $event->artists()->detach($artistId);

        return response()->json(['message' => 'Artist detached from event successfully.']);
    }
}