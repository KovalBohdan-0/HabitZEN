<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


/**
 * Habit
 *
 * @mixin Eloquent
 */
class Habit extends Model
{
    use HasFactory;

    protected $fillable = ['goal', 'time', 'time_type', "name", "type", "week_day", "bad_habit"];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'time' => '12:00',
        'time_type' => 'MORNING',
        'type' => 'TIMES',
        'week_day' => 'MONDAY',
        'bad_habit' => false,
        'goal' => 1
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function progresses(): HasMany
    {
        return $this->hasMany(Progress::class);
    }
}
