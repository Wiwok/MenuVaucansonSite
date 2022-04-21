const days = ['', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
const day = 2;
const date = menu[0].plat;

var select = document.getElementById('list');

function logValue() {
	switch (this.value) {
		case '0':
			window.location.href = './index.html';
			break;
		case '1':
			window.location.href = './lundi.html';
			break;
		case '2':
			window.location.href = './mardi.html';
			break;
		case '3':
			window.location.href = './mercredi.html';
			break;
		case '4':
			window.location.href = './jeudi.html';
			break;
		case '5':
			window.location.href = './vendredi.html';
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