<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    // Allow these fields to be mass assigned
    protected $fillable = ['name', 'genre', 'created_at', 'updated_at'];
    public function events()
    {
        return $this->belongsToMany(Event::class, 'event_artist', 'artist_id', 'event_id')
                    ->withTimestamps(); // Include timestamps if needed
    }
}