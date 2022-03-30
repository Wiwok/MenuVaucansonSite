const today = new Date();
const days = ['', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
const Days = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
const day = 2;
const date = menu[0].plat;

for (let i = 1; i < Days.length; i++){
	document.write("<option class=\"options\" value=\""+i+"\">"+Days[i]+"</option>");
}
document.write("</select>");
document.write("</form>");
document.write("</div>");
document.write("</div>");


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

var link = document.querySelector("link[rel~='icon']");
link = document.createElement('link');
link.rel = 'icon';
link.href = 'https://menu.anantasystem.com/favicon.ico';

document.getElementById('jsEntree').innerHTML = menu[day + 1].entree;
document.getElementById('jsPlat').innerHTML = menu[day + 1].plat;
document.getElementById('jsLegume').innerHTML = menu[day + 1].legume;
document.getElementById('jsLaitier').innerHTML = menu[day + 1].laitier;
document.getElementById('jsDessert').innerHTML = menu[day + 1].dessert;
document.getElementById('jsTitle').innerHTML = 'Menu du ' + days[day] + ' ' + date;
document.getElementById('jsTitle').style.color = '#2f2f2f';
