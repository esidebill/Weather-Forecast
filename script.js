$(document).ready(function() {
  var flag = 0;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var loc =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude;
      $.getJSON(loc, function(data) {
        var tempF = data.main.temp * 9 / 5 + 32;
        var tempC = data.main.temp;
        function changeTemp() {
          if (flag === 0) {
            $(".temperature").html("Temperature: " + Math.round(tempF) + "°");
            flag += 1;
          }
          else if(flag === 1) {
            $(".temperature").html("Temperature: " + Math.round(tempC) + "°");
            flag -= 1;
          }
        }
        $(".location").html(
          "Your location: " + data.sys.country + ", " + data.name
        );
        $(".conditions").html("Weather conditions: " + data.weather[0].main);
        $(".temperature").html("Temperature: " + Math.round(tempF)  + "°");
        $(".humidity").html("Humidity: " + data.main.humidity + "%");
        $(".icon").attr("src", data.weather[0].icon);
       
        $("#fc").on("click", function() {
    changeTemp();
  });
      });
    });
  }
  
});
