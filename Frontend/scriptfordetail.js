$(function (){

	var loc = window.location.hash.replace("#","");


	$.ajax({
		type: 'GET',
		url: 'https://parodistic-restrict.000webhostapp.com/notes/' + loc,
		dataType: 'json',
		success: function(data){

		if(data['flag'] == '0'){
			var favorites = 'В избранное';
		} 
		else {
			var favorites = 'Из избранного';
		}

          document.getElementsByClassName('content')[0].innerHTML += '<li>' + '<a href="detail.html#' + loc + '">' +
          '<h2>Заголовок: '+data["title"]+'</h2>' +
          '<p>Описание: '+data["description"]+'</p>' + 
          '<p>Дата создания: '+data["date"]+'</p>' + '</a>' + '</li>' +
          '<textarea class="inp1" id="inp1" type="text" name="text"></textarea>'+
		  '<input class="inp2" id="inp2" type="text" name="text" />' +
		  '<a onclick="updateNote()" class="button7">Обновить</a>' +
	      '<a href="index.html" onclick="deleteNote()" class="button6">Удалить</a>' +
	      '<a onclick="addFavorites()" class="button5">' + favorites + '</label>';

	}
		});

	
		});

function updateNote(){

	var loc = window.location.hash.replace("#","");

	const title = document.getElementById('inp2').value,
		 desc = document.getElementById('inp1').value;

	var formData = new FormData();
	formData.append('title', title);
	formData.append('desc', desc );

	res = fetch('https://parodistic-restrict.000webhostapp.com/notes/' + loc,{
		method: 'POST',
		body: formData,
		dataType: 'json'
	});
	location.reload();
}

function sleep(ms) {
ms += new Date().getTime();
while (new Date() < ms){}
} 

function addFavorites(){

	var loc = window.location.hash.replace("#","");

	$.ajax({
		type: 'GET',
		url: 'https://parodistic-restrict.000webhostapp.com/favorites/' + loc,
		dataType: 'json'
});
	sleep(10);
	location.reload();

}

function deleteNote(){

	var loc = window.location.hash.replace("#","");

	$.ajax({
		type: 'GET',
		url: 'https://parodistic-restrict.000webhostapp.com/delete/' + loc,
		dataType: 'json'
});
}



