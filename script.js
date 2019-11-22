var key = "697a503cd6f089e038d0e57a5755ce20";
var cityHistory = [];
console.log(cityHistory);

$("#button-addon2").on("click", function () {
  var city = $("#cityInput").val();

  displayWeather();
  fiveDay();
  history();
});

function fiveDay() {
  var city = $("#cityInput").val();
  var queryURLfive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=JSON&appid=" + key;
  console.log(queryURLfive);
  $.ajax({
    url: queryURLfive,
    method: "GET"
  }).then(function (responseFive) {
    console.log(responseFive);
    console.log(responseFive.list[0]);
    console.log(responseFive.list[0].dt_txt);

    var imageUrlone = "http://openweathermap.org/img/wn/" + responseFive.list[0].weather[0].icon + "@2x.png";
    $(".dayOneDate").text(moment(responseFive.list[0].dt_txt).format('ll'));
    $(".dayOneIcon").attr("src", imageUrlone);
    $(".dayOneTemp").text("Temp: " + responseFive.list[0].main.temp + " F");
    $(".dayOneHumidity").text("Humidity: " + responseFive.list[0].main.humidity + " %");

    console.log(responseFive.list[8]);
    var imageUrltwo = "http://openweathermap.org/img/wn/" + responseFive.list[8].weather[0].icon + "@2x.png";
    $(".dayTwoDate").text(moment(responseFive.list[8].dt_txt).format('ll'));
    $(".dayTwoIcon").attr("src", imageUrltwo);
    $(".dayTwoTemp").text("Temp: " + responseFive.list[8].main.temp + " F");
    $(".dayTwoHumidity").text("Humidity: " + responseFive.list[8].main.humidity + " %");

    console.log(responseFive.list[16]);
    var imageUrlthree = "http://openweathermap.org/img/wn/" + responseFive.list[16].weather[0].icon + "@2x.png";
    $(".dayThreeDate").text(moment(responseFive.list[16].dt_txt).format('ll'));
    $(".dayThreeIcon").attr("src", imageUrlthree);
    $(".dayThreeTemp").text("Temp: " + responseFive.list[16].main.temp + " F");
    $(".dayThreeHumidity").text("Humidity: " + responseFive.list[16].main.humidity + " %");

    console.log(responseFive.list[24]);
    var imageUrlfour = "http://openweathermap.org/img/wn/" + responseFive.list[24].weather[0].icon + "@2x.png";
    $(".dayFourDate").text(moment(responseFive.list[24].dt_txt).format('ll'));
    $(".dayFourIcon").attr("src", imageUrlfour);
    $(".dayFourTemp").text("Temp: " + responseFive.list[24].main.temp + " F");
    $(".dayFourHumidity").text("Humidity: " + responseFive.list[24].main.humidity + " %");

    console.log(responseFive.list[32]);
    var imageUrlfive = "http://openweathermap.org/img/wn/" + responseFive.list[32].weather[0].icon + "@2x.png";
    $(".dayFiveDate").text(moment(responseFive.list[32].dt_txt).format('ll'));
    $(".dayFiveIcon").attr("src", imageUrlfive);
    $(".dayFiveTemp").text("Temp: " + responseFive.list[32].main.temp + " F");
    $(".dayFiveHumidity").text("Humidity: " + responseFive.list[32].main.humidity + " %");

  });
}

function oldHistory() {
  var getHistory = JSON.parse(localStorage.getItem("History"));
  for (var j = 0; j < getHistory.length; j++) {
    cityHistory.unshift(getHistory[j]);
  }
  for (var i = 0; i < 5; i++) {
    $("#cityInput").attr("value", getHistory[0]);
    $("#one").text(getHistory[1]);
    $("#two").text(getHistory[2]);
    $("#three").text(getHistory[3]);
    $("#four").text(getHistory[4]);
  };
}

function history() {
  var city = $("#cityInput").val().toUppercase;
  //cityHistory.unshift(city);
  for (var i = 0; i < 4; i++) {
    $("#one").text(cityHistory[0]);
    $("#two").text(cityHistory[1]);
    $("#three").text(cityHistory[2]);
    $("#four").text(cityHistory[3]);
  };
  localStorage.setItem("History", JSON.stringify(cityHistory))
}

function displayWeather() {
  var city = $("#cityInput").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var imageUrl = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
console.log(imageUrl);
    cityHistory.unshift(response.name)

    $(".cityDate").text(response.name);
    $(".icon").attr("src", imageUrl);
    $(".temp").text(response.main.temp + " F");
    $(".humidity").text(response.main.humidity + " %");
    $(".windSpeed").text(response.wind.speed + " mph");
    $(".date").text(moment().format("MMM Do YY"));

    var keyUV = "697a503cd6f089e038d0e57a5755ce20";
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var queryURLuv = "https://api.openweathermap.org/data/2.5/uvi?appid=" + keyUV + "&lat=" + lat + "&lon=" + lon;
    $.ajax({
      url: queryURLuv,
      method: "GET"
    }).then(function (responseUV) {

      console.log(responseUV.value);

      $(".UVindex").text(responseUV.value);
    });
  });
  

}

oldHistory();
displayWeather();
fiveDay();


