$(function (){


	$.ajax({
		type: 'GET',
		url: 'https://parodistic-restrict.000webhostapp.com/notes',
		dataType: 'json',
		success: function(data){

		  for(i=0; i < data.length; i++)
{
		if(data[i]['flag'] == '1'){
			var favorites = 'checked';
		} 
		else {
			var favorites = '';
		}

          document.getElementsByClassName('content')[0].innerHTML += '<li>'  + 
          '<a href="detail.html' + '#' + data[i]['id'] + '">'+
          '<h2><span class="fa fa-star ' + favorites +  '"></span>Заголовок: '+data[i]["title"]+'</h2>' +
          '<p>Описание: '+data[i]["description"]+'</p>' + 
          '<p>Дата создания: '+data[i]["date"]+'</p>' + 
           '</a>' + '</li>';
}


	}
		});

	

		});

function sorting(){

	document.getElementsByClassName('content')[0].innerHTML = '';

	$.ajax({
		type: 'GET',
		url: 'https://parodistic-restrict.000webhostapp.com/sortnotes',
		dataType: 'json',
		success: function(data){

		  for(i=0; i < data.length; i++)
{

		if(data[i]['flag'] == '1'){
			var favorites = 'checked';
		} 
		else {
			var favorites = '';
		}


          document.getElementsByClassName('content')[0].innerHTML += '<li>'  + 
          '<a href="detail.html' + '#' + data[i]['id'] + '">'+
          '<h2><span class="fa fa-star ' + favorites +  '"></span>Заголовок: '+ data[i]["title"] + '</h2>' +
          '<p>Описание: '+data[i]["description"]+'</p>' + 
          '<p>Дата создания: '+data[i]["date"]+' </p>' + 
          '</a>' + '</li>' 
}


	}
		});
	}

function sortingByFavorites(){

	document.getElementsByClassName('content')[0].innerHTML = '';

	$.ajax({
		type: 'GET',
		url: 'https://parodistic-restrict.000webhostapp.com/sortnotesByFavorites',
		dataType: 'json',
		success: function(data){

		  for(i=0; i < data.length; i++)
{

		if(data[i]['flag'] == '1'){
			var favorites = 'checked';
		} 
		else {
			var favorites = '';
		}


          document.getElementsByClassName('content')[0].innerHTML += '<li>'  + 
          '<a href="detail.html' + '#' + data[i]['id'] + '">'+
          '<h2><span class="fa fa-star ' + favorites +  '"></span>Заголовок: '+ data[i]["title"] + '</h2>' +
          '<p>Описание: '+data[i]["description"]+'</p>' + 
          '<p>Дата создания: '+data[i]["date"]+' </p>' + 
          '</a>' + '</li>' 
}


	}
		});
	}
