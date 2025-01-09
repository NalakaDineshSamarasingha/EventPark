<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventType extends Model
{
    protected $fillable = ['type_name'];

    public function events()
    {
        return $this->hasMany(Event::class);
    }
}