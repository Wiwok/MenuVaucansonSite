const today = new Date();
const days = ['', 'lundi', 'mardi', 'mercredi', 'jeudi']
let day = 4;
let date = menu[0].laitier;


var select = document.getElementById('list');

function logValue() {
    switch (this.value) {
		case '0':
			window.location.href='./menusoir.html';
			break;
        case '1':
			window.location.href='./menusoirlundi.html';
            break;
		case '2':
			window.location.href='./menusoirmardi.html';
            break;
        case '3':
			window.location.href='./menusoirmercredi.html';
            break;
		case '4':
			window.location.href='./menusoirjeudi.html';
			break;
    }
}

select.addEventListener('change', logValue, false);

var link = document.querySelector("link[rel~='icon']");
link = document.createElement('link');
link.rel = 'icon';
link.href = 'https://menu.anantasystem.com/favicon.ico';

document.getElementById('jsEntree').innerHTML = menu[day + 1].entree;
document.getElementById('jsPlat').innerHTML = menu[day + 1].plat;
document.getElementById('jsLegume').innerHTML = menu[day + 1].legume;
document.getElementById('jsLaitier').innerHTML = menu[day + 1].laitier;
document.getElementById('jsDessert').innerHTML = menu[day + 1].dessert;
document.getElementById('jsTitle').innerHTML = 'Menu du ' + days[day] + ' ' + date + ' au soir';
document.getElementById('jsTitle').style.color = '#2f2f2f';
