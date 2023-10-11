<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Progress;
use Illuminate\Http\Request;

class ProgressController extends Controller
{
   public function __construct()
    {
        $this->middleware("auth:api");
    }

    /**
     * Display a listing of the resource.
     */
    public function index($habit_id)
    {
        return Progress::where('habit_id', '=', $habit_id)->get();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Progress::find($id);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Progress::create($request->all());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $progress = Progress::findOrFail($id);
        $progress->update($request->all());

        return $progress;
    }


    /**
     * Remove the specified resource from storage.
     */
    public function delete($id)
    {
        $progress = Progress::findOrFail($id);
        $progress->delete();
    }
}
