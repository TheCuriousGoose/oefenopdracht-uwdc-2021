<?php

namespace App\Http\Controllers;

use App\Models\ProjectileThrow;
use Illuminate\Http\Request;

class ProjectileThrowController extends Controller
{
    public function create(Request $request){
        if(!$request->has('game_id')){
            return response()->json(['message' => 'Invalid format']);
        }

        if(!$request->has('angle')){
            return response()->json(['message' => 'Invalid format']);
        }

        if(!$request->has('power')){
            return response()->json(['message' => 'Invalid format']);
        }

        $throw = ProjectileThrow::create([
            'game_id' => $request->game_id,
            'angle' => $request->angle,
            'power' => $request->power
        ]);

        return response()->json($throw);
    }
}
