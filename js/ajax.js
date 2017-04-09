'use strict';

document.getElementsByTagName('button')[0].onclick = function(){
    
    var dane = new XMLHttpRequest();


    dane.open('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', true);

    dane.onreadystatechange = function() {
	

		if (dane.readyState == 4 && (dane.status >= 200 && dane.status < 300 || dane.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof dane.status == 'undefined')) {
			//tutaj wykonujemy operacje na danych

            var pobraneDane = dane.responseText;
            
            
            //zmień dane tekstowe na obiekt JSON
            var jsonObj = JSON.parse(pobraneDane); //parse zamiana z text na objekt
            
            console.log(jsonObj);
            
            
            var parId = document.createElement('p');
            var parName = document.createElement('p'); 
            var parURL = document.createElement('p');
            
            
            parId.innerHTML = 'User ID: ' + jsonObj.userId;
            parName.innerHTML = 'User Name: ' + jsonObj.userName;
            parURL.innerHTML = 'User WEB: ' + jsonObj.userURL;
            

            document.body.appendChild(parId);
            document.body.appendChild(parName);
            document.body.appendChild(parURL);
            
			//po zakończeniu operacji usuń obietk
			dane = null;

		}
}
dane.send();
}

$('button').eq(1).click(function() {
    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(dane){
       console.log(dane); 
        
            var parId = document.createElement('p');
            var parName = document.createElement('p'); 
            var parURL = document.createElement('p');
            
            
            parId.innerHTML = 'User ID: ' + dane.userId;
            parName.innerHTML = 'User Name: ' + dane.userName;
            parURL.innerHTML = 'User WEB: ' + dane.userURL;
            

            document.body.appendChild(parId);
            document.body.appendChild(parName);
            document.body.appendChild(parURL);
            
			//po zakończeniu operacji usuń obietk
			dane = null;
        
    });
});

/*document.getElementsByTagName('button')[1].onclick = function(){
    
}*/



