<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Habit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HabitController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:api");
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
//        return Auth::id();
        return Habit::where('user_id', '=', Auth::id())->get();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Habit::find($id);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $habit = new Habit($data);
        Auth::user()->habits()->save($habit);
        return $habit;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $habit = Habit::findOrFail($id);
        $habit->update($request->all());

        return $habit;
    }


    /**
     * Remove the specified resource from storage.
     */
    public function delete($id)
    {
        $habit = Habit::findOrFail($id);
        $habit->delete();
    }
}
