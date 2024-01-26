<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;

class PostsController extends Controller
{
    public function index()
    {
        $allPosts = Posts::orderBy('created_at', 'DESC')
        ->paginate(15);
        
        return $allPosts;
    }

    public function create(Request $request, $userId)
    {
        $title = $request->input('title');
        $content = $request->input('content');

        if($title && $content) {
            $post = Posts::create([
                'title' => $title,
                'content' => $content,
                'user_id' => $userId,
            ]);

            return response()->json(['message' => 'Posted!']);
        }

        return response()->json(['message' => 'Something wrong happened.']);
    }

    public function show($postId)
    {
        $post = Posts::select('title', 'content')->find($postId);

        if($post) {
            return $post;
        }

        return response()->json(['message' => 'Post not exist.']);
    }

    public function edit(Request $request, $postId)
    {
        $title = $request->input('title');
        $content = $request->input('content');

        $post = Posts::find($postId);

        if(!$post){
            return response()->json(['message' => 'Post not exist.']);
        }

        $post->title = $title;
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
