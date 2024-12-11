<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id(); // auto-incrementing ID
            $table->string('name'); // Event name
            $table->text('description')->nullable(); // Event description
            $table->dateTime('start_time'); // Event start time
            $table->dateTime('end_time')->nullable(); // Event end time
            $table->string('location')->nullable(); // Event location
            $table->timestamps(); // created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};