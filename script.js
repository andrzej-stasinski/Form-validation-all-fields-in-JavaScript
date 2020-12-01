
function isNoEmpty(pole) {
	if(pole.value == "") {
		console.log('inNoEmpty');
		var komunikat = document.getElementById('i'+pole.id);
		komunikat.className = "info error";
		komunikat.innerHTML = "Puste pole";
		return false;
	} else {
		console.log('i'+pole.id);
		var komunikat = document.getElementById('i'+pole.id);
		komunikat.className = "info info_ok"
		komunikat.innerHTML = "Imię - ok";
		return true;
	}
}

function isNumber(pole) {
	if(isNoEmpty(pole)) {
		console.log('true');
		if(isNaN(pole.value)) {
			var komunikat = document.getElementById('i'+pole.id);
			komunikat.className = "info error";
			komunikat.innerHTML = "Pole jest numeryczne";
			return false;
		} else {
			document.getElementById('i'+pole.id).innerHTML = "OK";
			var komunikat = document.getElementById('i'+pole.id);
			komunikat.className = "info info_ok"
			komunikat.innerHTML = "Numeric - ok";
			return true;
		}
	} else {
		return false;
	}
}

function isCode(pole) {
	if(isNoEmpty(pole)) {
		var wzorzec = /^[0-9]{2}-[0-9]{3}$/ig;
		if(wzorzec.test(pole.value)) {
			var komunikat = document.getElementById('i'+pole.id);
			komunikat.className = "info info_ok"
			komunikat.innerHTML = "Kod - ok";
			return true;
		} else {
			var komunikat = document.getElementById('i'+pole.id);
			komunikat.className = "info error";
			komunikat.innerHTML = "Kod - nieprawidłowy";
			return false;
		}
	} else {
		return false;
	}
}

function init() {
	var form = document.getElementById('form');
	form.onsubmit = function() {
		var imie = document.getElementById('imie');
		var nrklienta = document.getElementById('nrklienta');
		var pocztowy = document.getElementById('kod');
		
			var send = true;
			var send_imie = isNoEmpty(imie);
			var send_nrklienta = isNumber(nrklienta);
			var send_pocztowy = isCode(pocztowy);
			if(send_imie && send_nrklienta && send_pocztowy) {
				alert('Send form');
				return false;
			} else {
				alert('Not Send form');
				return false;
			}
	}
}

window.onload = init;















