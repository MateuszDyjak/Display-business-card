function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}


function displayMyData() {

	info= 'To show data please enter the button below\n'

	+ 'Name : Mateusz\n'
	+ 'Last name : Dyjak\n'
	+ 'email : mateuszdyjak5@gmail.com\n'
	+ 'Dean\'s group : KrDUIS 1011\n'
	+ 'Field of study : Computer Science' ;

navigator.notification.alert(info);

}
