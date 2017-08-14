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
        $(".conditions").html("Currently: " + data.weather[0].main);
        $("#F").html("Temperature: " + Math.round(tempF) + "°");
        $("#C").html("Temperature: " + Math.round(tempC) + "°");
        $(".humidity").html("Humidity: " + data.main.humidity + "%");
        $(".icon").attr("src", data.weather[0].icon);

        //select case to determine background image
        switch (data.weather[0].main) {
          case "Clear":
            $("body").css(
              "background-image",
              "url('https://images.unsplash.com/photo-1464495310703-83aac94583ee?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=95f84e8f19e07b781bd60190e8a72dac')"
            );
            break;
          case "Rain":
            $("body").css(
              "background-image",
              "url('https://images.unsplash.com/19/drops.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=59ee0e464d82b20a03f0792d58f07c05')"
            );
            break;
          case "Clouds":
            $("body").css(
              "background-image",
              "url('https://images.unsplash.com/photo-1481433705997-f3c061a4eac8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=59f5add1c8d7e3f23c7a0397c9c97bf2')"
            );
            break;
          case "Snow":
            $("body").css(
              "background-image",
              "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d87a3c29e139477c450c787a63bdce6f')"
            );
            break;
          default:
            $("body").css(
              "background-image",
              "url('https://images.unsplash.com/photo-1460602692976-8eab38c11f9d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=6ac548b7711f39cdde0bad17f6b60ef8')"
            );
        }

        //button that changes from F to C
        $("#fc").on("click", function() {
          $(".temperature").toggle();
        });
      });
    });
  }
});
