const today = new Date();
const days = ['', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
let day = today.getDay();
let date;

if (day == 7) {
	day = 1;
	date = menu[0].entree;
}

else if (day == 6) {
	day = 1;
	date = menu[0].entree;
}

else if (day == 5) {
	date = menu[0].dessert;
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
			window.location.href='./index.html';
			break;
        case '1':
			window.location.href='./lundi.html';
            break;
		case '2':
			window.location.href='./mardi.html';
            break;
        case '3':
			window.location.href='./mercredi.html';
            break;
		case '4':
			window.location.href='./jeudi.html';
			break;
		case '5':
			window.location.href='./vendredi.html';
			break;
    }
}

select.addEventListener('change', logValue, false);


document.getElementById('jsEntree').innerHTML = menu[day + 1].entree;
document.getElementById('jsPlat').innerHTML = menu[day + 1].plat;
document.getElementById('jsLegume').innerHTML = menu[day + 1].legume;
document.getElementById('jsLaitier').innerHTML = menu[day + 1].laitier;
document.getElementById('jsDessert').innerHTML = menu[day + 1].dessert;
document.getElementById('jsTitle').innerHTML = 'Menu du ' + days[day] + ' ' + date;
document.getElementById('jsTitle').style.color = '#2f2f2f';
document.getElementById('jsTitle').style.height = 'max-content';
document.getElementById('jsTitle').style.width = 'max-content';
document.getElementById('jsTitleDiv').style.height = 'max-content';
document.getElementById('jsTitleDiv').style.width = 'max-content';
