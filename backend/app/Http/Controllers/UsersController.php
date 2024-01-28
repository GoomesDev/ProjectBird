<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function index()
    {
        $allUsers = Users::get();

        return $allUsers;
    }

    public function create(Request $request)
    {
        $username = $request->input('name');
        $password = $request->input('password');
        
        if (empty($password) || empty($username)) {
            return response()->json(['message' => 'Password is required.'], 400);
        }

        $existingUser = Users::where('name', $username)->first();

        if($existingUser) {
            return response()->json(['message' => 'User already exist'], 401);
        }

        $user = Users::create([
            'name' => $username,
            'password' => bcrypt($password)
        ]);

        if($user) {
            return response()->json(['message' => 'User registered successfully.'], 200);
        }

        return response()->json(['message' => 'An error occurred while registering the user.'], 500);
    }

    public function login(Request $request)
    {
        $username = $request->input('name');
        $password = $request->input('password');

        $user = Users::where('name', $username)->first();

        if($user && password_verify($password, $user->password)){
            return response()->json([
                'message' => 'Successful login.',
                'user_id' => $user->id
            ], 200);
        }

        return response()->json(['message' => 'Incorrect username or password.
        '], 401);
    }

    public function show($userId)
    {
        $user = Users::select(['name', 'created_at'])->find($userId);

        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        return $user;
    }

    public function update(Request $request, $userId)
    {
        $newUsername = $request->input('name');
        $newPassword = $request->input('password');

        $user = Users::find($userId);
        if(!$user){
            return response()->json(['message' => 'User not found.'], 404);
        }

        if($newUsername != $user->name) {
            $existingUser = Users::where('name', $newUsername)->first();
            if($existingUser) {
                return response()->json(['message' => 'Username already exists.'], 401);
            }
        }

        $user->name = $newUsername;
        $user->password = bcrypt($newPassword);
        $user->save();

        return response()->json(['message' => 'User updated successfully.']);
    }

    public function destroy($userId)
    {
        $user = Users::where('id', $userId)->delete();

        if($user){
          return response()->json(['message' => 'User deleted successfully.
        ']);
        }

        return response()->json(['message' => 'An error occurred while deleting the user.
        ']);
    }
}
