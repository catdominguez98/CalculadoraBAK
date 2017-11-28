var Chihuahua = {
	name: 'Chihuahua',
	weight: '2',
	picture: 'chihuahua.jpeg'
}

var Schnauzer = {
	name: 'Schnauzer',
	weight: '7',
	picture: 'schnauzer.jpeg'
}

var Poodle = {
	name: 'Poodle',
	weight: '7',
	picture: 'poodle.jpeg'
}

var Labrador = {
	name: 'Labrador',
	weight: '32',
	picture: 'labrador.jpeg'
}

var Pug = {
	name: 'Pug',
	weight: '7',
	picture: 'pug.jpeg'
}

var Border = {
	name: 'Border Collie',
	weight: '16',
	picture: 'border.png'
}

var Corgi = {
	name: 'Corgi',
	weight: '15',
	picture: 'corgi.png'
}

var Salchicha = {
	name: 'Salchicha',
	weight: '10',
	picture: 'salchicha.png'
}

function chooseBreed(){
	if (document.getElementById('change_chart').value == "chi"){
		var img = document.getElementById('img1');
		img.setAttribute("src", `${Chihuahua.picture}`);
		img.setAttribute("width", "300px");
 		img.setAttribute("height", "300px");
	} else if (document.getElementById('change_chart').value == "sch"){
		var img = document.getElementById('img1');
		img.setAttribute("src", `${Schnauzer.picture}`);
		img.setAttribute("width", "300px");
 		img.setAttribute("height", "300px");
	} else if (document.getElementById('change_chart').value == "poo"){
		var img = document.getElementById('img1');
		img.setAttribute("src", `${Poodle.picture}`);
		img.setAttribute("width", "300px");
 		img.setAttribute("height", "300px");
	} else if (document.getElementById('change_chart').value == "lab"){
		var img = document.getElementById('img1');
		img.setAttribute("src", `${Labrador.picture}`);
		img.setAttribute("width", "300px");
 		img.setAttribute("height", "300px");
	} else if (document.getElementById('change_chart').value == "pug"){
		var img = document.getElementById('img1');
		img.setAttribute("src", `${Pug.picture}`);
		img.setAttribute("width", "300px");
 		img.setAttribute("height", "300px");
	} else if (document.getElementById('change_chart').value == "bor"){
		var img = document.getElementById('img1');
		img.setAttribute("src", `${Border.picture}`);
		img.setAttribute("width", "200px");
 		img.setAttribute("height", "auto");
	} else if (document.getElementById('change_chart').value == "cor"){
		var img = document.getElementById('img1');
		img.setAttribute("src", `${Corgi.picture}`);
		img.setAttribute("width", "200px");
 		img.setAttribute("height", "auto");
	} else {
		var img = document.getElementById('img1');
		img.setAttribute("src", `${Salchicha.picture}`);
		img.setAttribute("width", "200px");
 		img.setAttribute("height", "auto");
	} 
}

function calcAlimento(){
	if (document.getElementById('age_chart').value == "1") {
		var peso = document.getElementById("txt").value;
		var resultado = peso * 0.09;
		var n = resultado.toFixed(3);
		respuesta = document.createElement('div');
		respuesta.appendChild(document.createTextNode(`La porción diaria recomendada para tu cachorro es de ` + n + ` Kg`));
		respuesta.style.color = "yellow";
		respuesta.style.fontsize = "number";
		respuesta.style.textAlign = "center";
		return document.getElementById("div1").appendChild(respuesta); 
	} else if (document.getElementById('age_chart').value == "2") {
		var peso = document.getElementById("txt").value;
		var resultado = peso * 0.06;
		var n = resultado.toFixed(3);
		respuesta = document.createElement('div');
		respuesta.appendChild(document.createTextNode(`La porción diaria recomendada para tu cachorro es de ` + n + ` Kg`));
		respuesta.style.color = "yellow";
		respuesta.style.fontsize = "number";
		respuesta.style.textAlign = "center";
		return document.getElementById("div1").appendChild(respuesta);
	} else if (document.getElementById('age_chart').value == "3") {
		var peso = document.getElementById("txt").value;
		var resultado = peso * 0.05;
		var n = resultado.toFixed(3);
		respuesta = document.createElement('div');
		respuesta.appendChild(document.createTextNode(`La porción diaria recomendada para tu cachorro joven es de ` + n + ` Kg`));
		respuesta.style.color = "yellow";
		respuesta.style.fontsize = "number";
		respuesta.style.textAlign = "center";
		return document.getElementById("div1").appendChild(respuesta);
	} else {
		var peso = document.getElementById("txt").value;
		var resultado = peso * 0.03;
		var n = resultado.toFixed(3);
		respuesta = document.createElement('div');
		respuesta.appendChild(document.createTextNode(`La porción diaria recomendada para tu perro es de ` + n + ` Kg`));
		respuesta.style.color = "yellow";
		respuesta.style.fontsize = "number";
		respuesta.style.textAlign = "center";
		return document.getElementById("div1").appendChild(respuesta);
	}
}