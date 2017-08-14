$(document).ready(function() {
  //gets current coordinates
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      //sets variable that will get jSON info from API based on user's IP coordinates
      var loc =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude;
      //gets info from API
      $.getJSON(loc, function(data) {
        //set variable for F and C
        var tempF = data.main.temp * 9 / 5 + 32;
        var tempC = data.main.temp;
        //adds information to the element based off current forecast
        $(".location").html(
          "Your location: " + data.sys.country + ", " + data.name
        );
        $(".conditions").html("Weather conditions: " + data.weather[0].main);
        $("#F").html("Temperature: " + Math.round(tempF) + "°");
        $("#C").html("Temperature: " + Math.round(tempC) + "°");
        $(".humidity").html("Humidity: " + data.main.humidity + "%");
        $(".icon").attr("src", data.weather[0].icon);

        //button that changes from F to C
        $("#fc").on("click", function() {
          $(".temperature").toggle();
        });
      });
    });
  }
});

