<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["prefix" => "account"], function() {
    Route::get('show', 'App\Http\Controllers\UsersController@index');
    Route::get('show/{userId}', 'App\Http\Controllers\UsersController@show');
    Route::post('create', 'App\Http\Controllers\UsersController@create');
    Route::post('login', 'App\Http\Controllers\UsersController@login');
    Route::delete('delete/{userId}', 'App\Http\Controllers\UsersController@destroy');
    Route::put('update/{userId}', 'App\Http\Controllers\UsersController@update');
});

Route::group(["prefix" => "feed"], function() {
    Route::resource('posts', 'App\Http\Controllers\PostsController');
    Route::post('create/{name}', 'App\Http\Controllers\PostsController@create');
    Route::get('show/{postId}', 'App\Http\Controllers\PostsController@show');
    Route::delete('delete/{postId}', 'App\Http\Controllers\PostsController@destroy');
    Route::put('edit/{postId}', 'App\Http\Controllers\PostsController@edit');
});
