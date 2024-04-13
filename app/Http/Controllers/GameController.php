<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\GameAttempt;
use Illuminate\Http\Request;
use Nette\Utils\Json;

class GameController extends Controller
{
    public function startGame(Request $request) {
        if(!$request->has('username') && !$request->has('country_code')){
            return response()->json(['message' => 'Invalid format']);
        }

        $game = Game::create([
            'username' => $request->username,
            'country_code' => $request->country_code
        ]);

        return response()->json($game);
    }

    public function endGame(Request $request){
        if(!$request->has('game_id') && !$request->has('distance')){
            return response()->json(['message' => 'Invalid format']);
        }

        $attempt = GameAttempt::create([
            'game_id' => $request->game_id,
            'distance_achieved' => $request->distance
        ]);

        return response()->json($attempt);
    }
}
