'use strict';

var dane = new XMLHttpRequest();


dane.open('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', true);

dane.onreadystatechange = function(){
    
    if(dane.readyState == 4){
        // tutaj wykonujemy operacje na danych
        
        // pozakończeniu operacji usuń obiekt
        dane = null;
    }

}

dane.send();
