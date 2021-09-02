<?php

require_once __DIR__.'/vendor/autoload.php';
require 'vendor/autoload.php';
require 'api.php';
include 'vendor/altorouter/altorouter/AltoRouter.php';
 
$method = $_SERVER['REQUEST_METHOD'];


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');

header("Content-type: application/json");


$q = $_GET['q'];
$params = explode("/", $q);
$id = $params[1];
if ($method === 'GET'){
	if ($params[0] === 'notes'){
		if (isset($id)){
			getNote($id);
		}
		else{
			getNotes();
		}
    
    }
    elseif($params[0] === 'delete'){
	    if(isset($id)){
		    deleteNote($id);
	}
    }
    elseif ($params[0] === 'sortnotes') {
		getSortNotes();
	}
	elseif ($params[0] === 'favorites') {
		if(isset($id)){
		    addFavorites($id);
	    }
	}
	elseif ($params[0] === 'sortnotesByFavorites') {
		 getSortNotesByFavorites();
	    }
}
elseif ($method === 'POST'){
		if($params[0] === 'notes'){
			if(isset($id)){
				updateNote($_POST, $id);
			}
			else{
				createNote($_POST);
		    }
	}
}




