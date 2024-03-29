var key = "697a503cd6f089e038d0e57a5755ce20";
var cityHistory = [];

console.log($("#customSwitch1")[0].checked);

$("#customSwitch1").on("click", function () {
    if($("#customSwitch1")[0].checked == true){
    $("body").css("background-color", "rgb(25,25,25)");
    $("body").css("color", "white");
    $(".card").css("background-color", "black");
    $(".card").css("border", "gray");
    $("#one, #two, #three, #four").css("background-color", "black");  
    $(".mainBox").css("background-color", "black");
    $(".mainBox").css("border", "solid 1px gray");
    $("#cityInput").css("background-color", "black");
    $("#button-addon2").css("background-color", "black");
    $("#button-addon2").css("color", "white");
    $(".whole").css("border", "solid 1px gray");  
    $(".icon").css("background-color", "gray");
    $(".whole").css("background-color", "transparent");
  }else{
    $("body").css("background-color", "whitesmoke");
    $("body").css("color", "black");
    $(".card").css("background-color", "white");    
    $("#one, #two, #three, #four").css("background-color", "white");   
    $(".mainBox").css("background-color", "white");
    $(".mainBox").css("border", "solid 1px black");
    $("#cityInput").css("background-color", "white");
    $("#button-addon2").css("background-color", "whitesmoke");
    $("#button-addon2").css("color", "black");
    $(".whole").css("border", "solid 1px black"); 
    $(".icon").css("background-color", "dodgerblue");
    $(".whole").css("background-color", "transparent");

  }
});

$("#one").hover(function(){
  $(this).css("background-color", "dodgerblue");
  }, function(){
  $(this).css("background-color", "transparent");
});

$("#two").hover(function(){
  $(this).css("background-color", "dodgerblue");
  }, function(){
  $(this).css("background-color", "transparent");
});

$("#three").hover(function(){
  $(this).css("background-color", "dodgerblue");
  }, function(){
  $(this).css("background-color", "transparent");
});

$("#four").hover(function(){
  $(this).css("background-color", "dodgerblue");
  }, function(){
  $(this).css("background-color", "transparent");
});

$("input").keydown(function () {
  if (event.keyCode === 13) {
    $(".card").show();
    displayWeather();
    fiveDay();
  }
});

$("#button-addon2").on("click", function () {
  var city = $("#cityInput").val();  
  $(".card").show();
  displayWeather();
  fiveDay();
});

function fiveDay() {
  var city = $("#cityInput").val();
  var queryURLfive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=JSON&appid=" + key;
  $.ajax({
    url: queryURLfive,
    method: "GET"
  }).then(function (responseFive) {
    
    var imageUrlone = "http://openweathermap.org/img/wn/" + responseFive.list[0].weather[0].icon + "@2x.png";
    $(".dayOneDate").text(moment(responseFive.list[0].dt_txt).format('ll'));
    $(".dayOneIcon").attr("src", imageUrlone);
    $(".dayOneTemp").text("Temp: " + responseFive.list[0].main.temp + " F");
    $(".dayOneHumidity").text("Humidity: " + responseFive.list[0].main.humidity + " %");

    var imageUrltwo = "http://openweathermap.org/img/wn/" + responseFive.list[8].weather[0].icon + "@2x.png";
    $(".dayTwoDate").text(moment(responseFive.list[8].dt_txt).format('ll'));
    $(".dayTwoIcon").attr("src", imageUrltwo);
    $(".dayTwoTemp").text("Temp: " + responseFive.list[8].main.temp + " F");
    $(".dayTwoHumidity").text("Humidity: " + responseFive.list[8].main.humidity + " %");

    var imageUrlthree = "http://openweathermap.org/img/wn/" + responseFive.list[16].weather[0].icon + "@2x.png";
    $(".dayThreeDate").text(moment(responseFive.list[16].dt_txt).format('ll'));
    $(".dayThreeIcon").attr("src", imageUrlthree);
    $(".dayThreeTemp").text("Temp: " + responseFive.list[16].main.temp + " F");
    $(".dayThreeHumidity").text("Humidity: " + responseFive.list[16].main.humidity + " %");

    var imageUrlfour = "http://openweathermap.org/img/wn/" + responseFive.list[24].weather[0].icon + "@2x.png";
    $(".dayFourDate").text(moment(responseFive.list[24].dt_txt).format('ll'));
    $(".dayFourIcon").attr("src", imageUrlfour);
    $(".dayFourTemp").text("Temp: " + responseFive.list[24].main.temp + " F");
    $(".dayFourHumidity").text("Humidity: " + responseFive.list[24].main.humidity + " %");

    var imageUrlfive = "http://openweathermap.org/img/wn/" + responseFive.list[32].weather[0].icon + "@2x.png";
    $(".dayFiveDate").text(moment(responseFive.list[32].dt_txt).format('ll'));
    $(".dayFiveIcon").attr("src", imageUrlfive);
    $(".dayFiveTemp").text("Temp: " + responseFive.list[32].main.temp + " F");
    $(".dayFiveHumidity").text("Humidity: " + responseFive.list[32].main.humidity + " %");

  });
}

function fiveDayOne() {
  var city = $("#one").text();
  var queryURLfive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=JSON&appid=" + key;
  $.ajax({
    url: queryURLfive,
    method: "GET"
  }).then(function (responseFive) {

    var imageUrlone = "http://openweathermap.org/img/wn/" + responseFive.list[0].weather[0].icon + "@2x.png";
    $(".dayOneDate").text(moment(responseFive.list[0].dt_txt).format('ll'));
    $(".dayOneIcon").attr("src", imageUrlone);
    $(".dayOneTemp").text("Temp: " + responseFive.list[0].main.temp + " F");
    $(".dayOneHumidity").text("Humidity: " + responseFive.list[0].main.humidity + " %");

    var imageUrltwo = "http://openweathermap.org/img/wn/" + responseFive.list[8].weather[0].icon + "@2x.png";
    $(".dayTwoDate").text(moment(responseFive.list[8].dt_txt).format('ll'));
    $(".dayTwoIcon").attr("src", imageUrltwo);
    $(".dayTwoTemp").text("Temp: " + responseFive.list[8].main.temp + " F");
    $(".dayTwoHumidity").text("Humidity: " + responseFive.list[8].main.humidity + " %");

    var imageUrlthree = "http://openweathermap.org/img/wn/" + responseFive.list[16].weather[0].icon + "@2x.png";
    $(".dayThreeDate").text(moment(responseFive.list[16].dt_txt).format('ll'));
    $(".dayThreeIcon").attr("src", imageUrlthree);
    $(".dayThreeTemp").text("Temp: " + responseFive.list[16].main.temp + " F");
    $(".dayThreeHumidity").text("Humidity: " + responseFive.list[16].main.humidity + " %");

    var imageUrlfour = "http://openweathermap.org/img/wn/" + responseFive.list[24].weather[0].icon + "@2x.png";
    $(".dayFourDate").text(moment(responseFive.list[24].dt_txt).format('ll'));
    $(".dayFourIcon").attr("src", imageUrlfour);
    $(".dayFourTemp").text("Temp: " + responseFive.list[24].main.temp + " F");
    $(".dayFourHumidity").text("Humidity: " + responseFive.list[24].main.humidity + " %");

    var imageUrlfive = "http://openweathermap.org/img/wn/" + responseFive.list[32].weather[0].icon + "@2x.png";
    $(".dayFiveDate").text(moment(responseFive.list[32].dt_txt).format('ll'));
    $(".dayFiveIcon").attr("src", imageUrlfive);
    $(".dayFiveTemp").text("Temp: " + responseFive.list[32].main.temp + " F");
    $(".dayFiveHumidity").text("Humidity: " + responseFive.list[32].main.humidity + " %");

  });
}

function fiveDayTwo() {
  var city = $("#two").text();
  var queryURLfive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=JSON&appid=" + key;
  $.ajax({
    url: queryURLfive,
    method: "GET"
  }).then(function (responseFive) {

    var imageUrlone = "http://openweathermap.org/img/wn/" + responseFive.list[0].weather[0].icon + "@2x.png";
    $(".dayOneDate").text(moment(responseFive.list[0].dt_txt).format('ll'));
    $(".dayOneIcon").attr("src", imageUrlone);
    $(".dayOneTemp").text("Temp: " + responseFive.list[0].main.temp + " F");
    $(".dayOneHumidity").text("Humidity: " + responseFive.list[0].main.humidity + " %");

    var imageUrltwo = "http://openweathermap.org/img/wn/" + responseFive.list[8].weather[0].icon + "@2x.png";
    $(".dayTwoDate").text(moment(responseFive.list[8].dt_txt).format('ll'));
    $(".dayTwoIcon").attr("src", imageUrltwo);
    $(".dayTwoTemp").text("Temp: " + responseFive.list[8].main.temp + " F");
    $(".dayTwoHumidity").text("Humidity: " + responseFive.list[8].main.humidity + " %");

    var imageUrlthree = "http://openweathermap.org/img/wn/" + responseFive.list[16].weather[0].icon + "@2x.png";
    $(".dayThreeDate").text(moment(responseFive.list[16].dt_txt).format('ll'));
    $(".dayThreeIcon").attr("src", imageUrlthree);
    $(".dayThreeTemp").text("Temp: " + responseFive.list[16].main.temp + " F");
    $(".dayThreeHumidity").text("Humidity: " + responseFive.list[16].main.humidity + " %");

    var imageUrlfour = "http://openweathermap.org/img/wn/" + responseFive.list[24].weather[0].icon + "@2x.png";
    $(".dayFourDate").text(moment(responseFive.list[24].dt_txt).format('ll'));
    $(".dayFourIcon").attr("src", imageUrlfour);
    $(".dayFourTemp").text("Temp: " + responseFive.list[24].main.temp + " F");
    $(".dayFourHumidity").text("Humidity: " + responseFive.list[24].main.humidity + " %");

    var imageUrlfive = "http://openweathermap.org/img/wn/" + responseFive.list[32].weather[0].icon + "@2x.png";
    $(".dayFiveDate").text(moment(responseFive.list[32].dt_txt).format('ll'));
    $(".dayFiveIcon").attr("src", imageUrlfive);
    $(".dayFiveTemp").text("Temp: " + responseFive.list[32].main.temp + " F");
    $(".dayFiveHumidity").text("Humidity: " + responseFive.list[32].main.humidity + " %");

  });
}

function fiveDayThree() {
  var city = $("#three").text();
  var queryURLfive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=JSON&appid=" + key;
  $.ajax({
    url: queryURLfive,
    method: "GET"
  }).then(function (responseFive) {

    var imageUrlone = "http://openweathermap.org/img/wn/" + responseFive.list[0].weather[0].icon + "@2x.png";
    $(".dayOneDate").text(moment(responseFive.list[0].dt_txt).format('ll'));
    $(".dayOneIcon").attr("src", imageUrlone);
    $(".dayOneTemp").text("Temp: " + responseFive.list[0].main.temp + " F");
    $(".dayOneHumidity").text("Humidity: " + responseFive.list[0].main.humidity + " %");

    var imageUrltwo = "http://openweathermap.org/img/wn/" + responseFive.list[8].weather[0].icon + "@2x.png";
    $(".dayTwoDate").text(moment(responseFive.list[8].dt_txt).format('ll'));
    $(".dayTwoIcon").attr("src", imageUrltwo);
    $(".dayTwoTemp").text("Temp: " + responseFive.list[8].main.temp + " F");
    $(".dayTwoHumidity").text("Humidity: " + responseFive.list[8].main.humidity + " %");

    var imageUrlthree = "http://openweathermap.org/img/wn/" + responseFive.list[16].weather[0].icon + "@2x.png";
    $(".dayThreeDate").text(moment(responseFive.list[16].dt_txt).format('ll'));
    $(".dayThreeIcon").attr("src", imageUrlthree);
    $(".dayThreeTemp").text("Temp: " + responseFive.list[16].main.temp + " F");
    $(".dayThreeHumidity").text("Humidity: " + responseFive.list[16].main.humidity + " %");

    var imageUrlfour = "http://openweathermap.org/img/wn/" + responseFive.list[24].weather[0].icon + "@2x.png";
    $(".dayFourDate").text(moment(responseFive.list[24].dt_txt).format('ll'));
    $(".dayFourIcon").attr("src", imageUrlfour);
    $(".dayFourTemp").text("Temp: " + responseFive.list[24].main.temp + " F");
    $(".dayFourHumidity").text("Humidity: " + responseFive.list[24].main.humidity + " %");

    var imageUrlfive = "http://openweathermap.org/img/wn/" + responseFive.list[32].weather[0].icon + "@2x.png";
    $(".dayFiveDate").text(moment(responseFive.list[32].dt_txt).format('ll'));
    $(".dayFiveIcon").attr("src", imageUrlfive);
    $(".dayFiveTemp").text("Temp: " + responseFive.list[32].main.temp + " F");
    $(".dayFiveHumidity").text("Humidity: " + responseFive.list[32].main.humidity + " %");

  });
}

function fiveDayFour() {
  var city = $("#four").text();
  var queryURLfive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=JSON&appid=" + key;
  $.ajax({
    url: queryURLfive,
    method: "GET"
  }).then(function (responseFive) {

    var imageUrlone = "http://openweathermap.org/img/wn/" + responseFive.list[0].weather[0].icon + "@2x.png";
    $(".dayOneDate").text(moment(responseFive.list[0].dt_txt).format('ll'));
    $(".dayOneIcon").attr("src", imageUrlone);
    $(".dayOneTemp").text("Temp: " + responseFive.list[0].main.temp + " F");
    $(".dayOneHumidity").text("Humidity: " + responseFive.list[0].main.humidity + " %");

    var imageUrltwo = "http://openweathermap.org/img/wn/" + responseFive.list[8].weather[0].icon + "@2x.png";
    $(".dayTwoDate").text(moment(responseFive.list[8].dt_txt).format('ll'));
    $(".dayTwoIcon").attr("src", imageUrltwo);
    $(".dayTwoTemp").text("Temp: " + responseFive.list[8].main.temp + " F");
    $(".dayTwoHumidity").text("Humidity: " + responseFive.list[8].main.humidity + " %");

    var imageUrlthree = "http://openweathermap.org/img/wn/" + responseFive.list[16].weather[0].icon + "@2x.png";
    $(".dayThreeDate").text(moment(responseFive.list[16].dt_txt).format('ll'));
    $(".dayThreeIcon").attr("src", imageUrlthree);
    $(".dayThreeTemp").text("Temp: " + responseFive.list[16].main.temp + " F");
    $(".dayThreeHumidity").text("Humidity: " + responseFive.list[16].main.humidity + " %");

    var imageUrlfour = "http://openweathermap.org/img/wn/" + responseFive.list[24].weather[0].icon + "@2x.png";
    $(".dayFourDate").text(moment(responseFive.list[24].dt_txt).format('ll'));
    $(".dayFourIcon").attr("src", imageUrlfour);
    $(".dayFourTemp").text("Temp: " + responseFive.list[24].main.temp + " F");
    $(".dayFourHumidity").text("Humidity: " + responseFive.list[24].main.humidity + " %");

    var imageUrlfive = "http://openweathermap.org/img/wn/" + responseFive.list[32].weather[0].icon + "@2x.png";
    $(".dayFiveDate").text(moment(responseFive.list[32].dt_txt).format('ll'));
    $(".dayFiveIcon").attr("src", imageUrlfive);
    $(".dayFiveTemp").text("Temp: " + responseFive.list[32].main.temp + " F");
    $(".dayFiveHumidity").text("Humidity: " + responseFive.list[32].main.humidity + " %");

  });
}
function emptyBox() {
  $("#cityInput").attr("value", "");
  $("#cityInput").text("");
  
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

  for (var i = 0; i < 4; i++) {
    $("#one").text(cityHistory[0]);
    $("#two").text(cityHistory[1]);
    $("#three").text(cityHistory[2]);
    $("#four").text(cityHistory[3]);
  };
}

function displayWeather() {
  var city = $("#cityInput").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var imageUrl = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
    cityHistory.unshift(response.name);
    localStorage.setItem("History", JSON.stringify(cityHistory));
   
    $("#cityInput").focusout();

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
      $(".UVindex").text(responseUV.value);
    });
  });
  emptyBox();
  history();
}

$("#one").on("click", function () {
  var city = $("#one").text();
  $(".card").show();
  displayOneWeather();
  fiveDayOne();
});

function displayOneWeather() {
  var city = $("#one").text();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var imageUrl = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
    cityHistory.unshift(response.name)
    localStorage.setItem("History", JSON.stringify(cityHistory));

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
      $(".UVindex").text(responseUV.value);
    });
  });
  history();
}

$("#two").on("click", function () {
  var city = $("#two").text();
  $(".card").show();
  displayTwoWeather();
  fiveDayTwo();
});

function displayTwoWeather() {
  var city = $("#two").text();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var imageUrl = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
    cityHistory.unshift(response.name)
    localStorage.setItem("History", JSON.stringify(cityHistory));

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
      $(".UVindex").text(responseUV.value);
    });
  });
  history();
}

$("#three").on("click", function () {
  var city = $("#three").text();
  $(".card").show();
  displayThreeWeather();
  fiveDayThree();
});

function displayThreeWeather() {
  var city = $("#three").text();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var imageUrl = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
    cityHistory.unshift(response.name)
    localStorage.setItem("History", JSON.stringify(cityHistory));

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
      $(".UVindex").text(responseUV.value);
    });
  });
  history();
}

$("#four").on("click", function () {
  var city = $("#four").text();
  $(".card").show();
  displayFourWeather();
  fiveDayFour();
});

function displayFourWeather() {
  var city = $("#four").text();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var imageUrl = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
    cityHistory.unshift(response.name)
    localStorage.setItem("History", JSON.stringify(cityHistory));

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
      $(".UVindex").text(responseUV.value);
    });
  });
  history();
}

oldHistory();
displayWeather();
fiveDay();


