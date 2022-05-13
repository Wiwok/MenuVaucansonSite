const days = ['', 'lundi', 'mardi', 'mercredi', 'jeudi']
let date;

if (day == -1) {
	day = new Date().getDay();
}

if (day == 0) {
	day = 1;
	date = menu[0].entree;
}

else if (day == 6) {
	day = 1;
	date = menu[0].entree;
}

else if (day == 5) {
	day = 1;
	date = menu[0].entree;
}

else if (day == 4) {
	date = menu[0].laitier;
}

else if (day == 3) {
	date = menu[0].legume;
}

else if (day == 2) {
	date = menu[0].plat;
}

else if (day == 1) {
	date = menu[0].entree;
}


var select = document.getElementById('list');

function logValue() {
	switch (this.value) {
		case '0':
			window.location.href = './menusoir.html';
			break;
		case '1':
			window.location.href = './menusoirlundi.html';
			break;
		case '2':
			window.location.href = './menusoirmardi.html';
			break;
		case '3':
			window.location.href = './menusoirmercredi.html';
			break;
		case '4':
			window.location.href = './menusoirjeudi.html';
			break;
	}
}

select.addEventListener('change', logValue, false);

document.getElementById('jsEntree').innerHTML = menu[day + 1].entree;
document.getElementById('jsPlat').innerHTML = menu[day + 1].plat;
document.getElementById('jsLegume').innerHTML = menu[day + 1].legume;
document.getElementById('jsLaitier').innerHTML = menu[day + 1].laitier;
document.getElementById('jsDessert').innerHTML = menu[day + 1].dessert;
document.getElementById('jsTitle').innerHTML = 'Menu du ' + days[day] + ' ' + date + ' au soir';
