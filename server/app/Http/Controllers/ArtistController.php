<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Artist;

class ArtistController extends Controller
{
    // Method to create a new artist
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
        ]);

        $artist = Artist::create([
            'name' => $request->name,
            'genre' => $request->genre,
        ]);

        return response()->json(['message' => 'Artist created successfully', 'artist' => $artist], 201);
    }

    // Method to get all artists
    public function index()
    {
        $artists = Artist::all();
        return response()->json($artists);
    }

    // Method to get a single artist by ID
    public function show($id)
    {
        $artist = Artist::find($id);
        if (!$artist) {
            return response()->json(['message' => 'Artist not found'], 404);
        }
        return response()->json($artist);
    }

    // Method to update an existing artist
    public function update(Request $request, $id)
    {
        $artist = Artist::find($id);
        if (!$artist) {
            return response()->json(['message' => 'Artist not found'], 404);
        }

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'genre' => 'sometimes|string|max:255',
        ]);

        $artist->update($request->only(['name', 'genre']));

        return response()->json(['message' => 'Artist updated successfully', 'artist' => $artist]);
    }

    // Method to delete an artist
    public function destroy($id)
    {
        $artist = Artist::find($id);
        if (!$artist) {
            return response()->json(['message' => 'Artist not found'], 404);
        }

        $artist->delete();

        return response()->json(['message' => 'Artist deleted successfully']);
    }
}