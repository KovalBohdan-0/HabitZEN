<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Progress extends Model
{
    use HasFactory;

    protected $fillable = ["complete", "date", "habit_id"];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'complete' => 0,
    ];

    public function habit(): BelongsTo
    {
        return $this->belongsTo(Habit::class);
    }
}
