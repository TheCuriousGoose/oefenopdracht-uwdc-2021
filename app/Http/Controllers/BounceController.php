<?php

namespace App\Http\Controllers;

use App\Models\Bounce;
use Illuminate\Http\Request;

class BounceController extends Controller
{
    public function create(Request $request){
        if (!$request->has('game_id')) {
            return response()->json(['message' => 'Invalid format']);
        }

        $bounce = Bounce::create([
            'game_id' => $request->game_id
        ]);

        return response()->json($bounce);
    }
}
