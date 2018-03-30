function getLocation() {
	if(b1.onclick="getLocation();") {
		document.getElementById("b1").addEventListener("click", getLocation);
		
    	if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getWeather);
   		} 
		else 
			{ 
        		window.alert("Geolocation is not supported by this browser.");
    		}
	}
}

function getWeather(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var link =  "https://fcc-weather-api.glitch.me/api/current?lat="+ lat + "&lon=" + lon;
  	$.ajax({
    	url: link, success: function (result) {
		document.getElementById('n1').innerHTML = "Current weather at: <br>";
		document.getElementById('lo').innerHTML = result.name + ", " + result.sys.country;
			
		tempInCelsius = Math.round(result.main.temp * 10) / 10;
		tempInFahr = tempInCelsius * 1.8 + 32;
		document.getElementById('txt').removeAttribute("hidden");
		document.getElementById('temp').innerHTML = tempInCelsius + " " + String.fromCharCode(176);
		document.getElementById('mera').innerHTML = "C";
		document.getElementById('main').innerHTML = result.weather[0].main;
		document.getElementById('desc').innerHTML = result.weather[0].description;
		document.getElementById('ico').src = result.weather[0].icon;
	}
  })
}

function promeni() {
	document.getElementById("mera").addEventListener("click", function(){
		if (document.getElementById('mera').innerHTML == "C") {
    		document.getElementById('temp').innerHTML = tempInFahr + " " + String.fromCharCode(176);
			document.getElementById('mera').innerHTML = "F";
		}
		else if (document.getElementById('mera').innerHTML = "F") {
    		document.getElementById('temp').innerHTML = tempInCelsius + " " + String.fromCharCode(176);
			document.getElementById('mera').innerHTML = "C";
		}
	});
}
