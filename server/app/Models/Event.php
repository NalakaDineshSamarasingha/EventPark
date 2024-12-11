<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    // Define which attributes are mass assignable
    protected $fillable = [
        'name',
        'description',
        'start_time',
        'end_time',
        'location',
    ];
}