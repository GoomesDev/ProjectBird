<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use App\Models\Users;

class PostsController extends Controller
{
    public function index()
    {
        $allPosts = Posts::orderBy('created_at', 'DESC')
        ->with('user')
        ->paginate(15);
        
        return $allPosts;
    }

    public function create(Request $request, $name)
    {
        $content = $request->input('content');

        $user = Users::where('name', $name)->first();

        if($content) {
            $post = Posts::create([
                'content' => $content,
                'user_id' => $user->id,
            ]);

            return response()->json(['message' => 'Posted!']);
        }

        return response()->json(['message' => 'Something wrong happened.']);
    }

    public function show($postId)
    {
        $post = Posts::select('content')->find($postId);

        if($post) {
            return $post;
        }

        return response()->json(['message' => 'Post not exist.']);
    }

    public function edit(Request $request, $postId)
    {
        $content = $request->input('content');

        $post = Posts::find($postId);

        if(!$post){
            return response()->json(['message' => 'Post not exist.']);
        }

        $post->content = $content;
        $post->save();

        return response()->json(['message' => 'Post edited succesfully.']);
    }

    public function destroy($postId)
    {
        $post = Posts::find($postId)->delete();

        if($post) {
            return response()->json(['message' => 'Post deleted!']);
        }

        return response()->json(['message' => 'Something wrong happened.']);
    }
}
