function createNote() {
	const title = document.getElementById('title').value,
		 desc = document.getElementById('descr').value;

	var formData = new FormData();
	formData.append('title', title);
	formData.append('desc', desc );


	let res = fetch('https://parodistic-restrict.000webhostapp.com/notes',{
		method: 'POST',
		body: formData,
		dataType: 'json'
	});

}