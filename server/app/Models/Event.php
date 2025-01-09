<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = ['event_name', 'place', 'event_date', 'event_time', 'event_type_id','image'];

    public function eventType()
    {
        return $this->belongsTo(EventType::class);
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
    public function artists()
    {
        return $this->belongsToMany(Artist::class, 'event_artist', 'event_id', 'artist_id')
                    ->withTimestamps(); // Include timestamps if needed
    }

}