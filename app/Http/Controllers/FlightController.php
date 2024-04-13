<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    public function create(Request $request)
    {
        if (!$request->has('game_id')) {
            return response()->json(['message' => 'Invalid format']);
        }

        if (!$request->has('speed')) {
            return response()->json(['message' => 'Invalid format']);
        }

        if (!$request->has('y')) {
            return response()->json(['message' => 'Invalid format']);
        }

        if (!$request->has('x')) {
            return response()->json(['message' => 'Invalid format']);
        }

        $flight = Flight::create([
            'game_id' => $request->game_id,
            'speed' => $request->speed,
            'x' => $request->x,
            'y' => $request->y
        ]);

        return response()->json($flight);
    }
}
