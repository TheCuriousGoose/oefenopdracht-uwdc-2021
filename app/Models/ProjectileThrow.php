<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectileThrow extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_id',
        'angle',
        'power'
    ];
}
