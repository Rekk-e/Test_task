<?php


require_once __DIR__.'/vendor/autoload.php';
require 'vendor/autoload.php';




class_alias('\RedBeanPHP\R', '\R');
{ 

R::setup( 'mysql:host=localhost;dbname=id14000588_notes','id14000588_rekke1', 'iNw2i!mTbqv[-3QR', false);
 
// Проверка подключения к БД
if(!R::testConnection()) die('No DB connection!');
 

R::ext('xdispense', function( $type ){
  return R::getRedBean()->dispense( $type );
});

}

function addFavorites($id){
$note = R::load('notes', $id);
if($note->flag === '0'){
    $note->flag = True;
    
    http_response_code(200);

	$res = [
		"status" => true,
		"message" => 'note add to favorites'
	];
	

	echo json_encode($res);
    }
else{
    $note->flag = False;
    
    http_response_code(200);

	$res = [
		"status" => true,
		"message" => 'note remove from favorites'
	];
	

	echo json_encode($res);
    }


R::store($note);
    
}

function getSortNotesByFavorites(){
$all = R::getAll('SELECT * FROM `notes` ORDER BY `flag` DESC');	
$notelist = [];
foreach ($all as $item){
	$notelist[] = $item;

}
	echo json_encode($notelist, JSON_PRETTY_PRINT);
	exit();  
}


function getSortNotes(){
$all = R::getAll('SELECT * FROM `notes` ORDER BY `date` DESC');	
$notelist = [];
foreach ($all as $item){
	$notelist[] = $item;

}
	echo json_encode($postlist, JSON_PRETTY_PRINT);
	exit();
}

function deleteNote($id){
	$note = R::load('notes', $id);
	R::trash($note);

	http_response_code(200);

	$res = [
		"status" => true,
		"message" => 'note delete'
	];

	echo json_encode($res);

}

function createNote($data){
    

$note = R::xdispense('notes');

$note->title = $data['title'];
$note->description = $data['desc'];
$note->date = R::isoDateTime();
$note->flag = False;

R::store( $note );

http_response_code(201);

$res = [
	"status" => true,
	"post_id" => R::getInsertID()
];

echo json_encode($res);

}

function getNotes() {

$all = R::getAll('SELECT * FROM `notes`');
$notelist = [];
foreach ($all as $item){
	$notelist[] = $item;
}
	echo json_encode($postlist, JSON_PRETTY_PRINT);
	exit();
}

function getNote($id){
 $all = R::getAll("SELECT * FROM `notes`");
 foreach ($all as $item){
	if($item['id'] === $id){
		echo json_encode($item, JSON_PRETTY_PRINT);
		
	}
}
		
}

function updateNote($data, $id){
    

	$note = R::load('notes', $id);
	$note->title = $data['title'];
	$note->description = $data['desc'];

	R::store($note);

	http_response_code(200);

	$res = [
		"status" => true,
		"message" => 'note update'
	];
	

	echo json_encode($res);
}


?>