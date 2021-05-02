//challenge 1 where im showing the curent date

let time = new Date();
let currentTime = document.querySelector("#currentTime");

function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Marc",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let year = time.getFullYear();
  let day = days[time.getDay()];
  let month = months[time.getMonth()];
  let Date = time.getDate();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  currentTime.innerHTML = `Today is ${day}, ${month} ${Date}, ${year}, ${hours}: ${minutes}`;
}

console.log(formatDate(new Date()));

// implementing the search engine week 5

function displayCity(event) {
  event.preventDefault();
  let apiKey = "d4344c6ea95063be2031ed54ff742e0b";
  let city = document.querySelector("#search-city").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let citySearchBar = document.querySelector("#search-form");
citySearchBar.addEventListener("submit", displayCity);

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city");
  console.log(searchCity.value);
  if (searchCity.value) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${searchCity.value}`;
  } else {
    alert("Please enter the city");
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//bonus challenge Celsius & Fahrenheit
function celsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 20;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", celsius);

function Fahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 60;
}

let fahLink = document.querySelector("#fah-link");
fahLink.addEventListener("click", Fahrenheit);

function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#search-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  console.log(response.data);
  let description = response.data.weather[0].main;
  let descriptionInput = document.querySelector("#description");
  descriptionInput.innerHTML = `Sky :  ${description}`;
  let humidity = response.data.main.humidity;
  let humidityDescription = document.querySelector("#hmd-description");
  humidityDescription.innerHTML = `Humidity: ${humidity} %`;

  let wind = response.data.wind.speed;

  let windDescription = document.querySelector("#wind-description"); //need to acces the info on the object

  windDescription.innerHTML = `Wind : ${wind} Km/h`;
}

//need to fix this for the bonus challenge instead coords needs to print name and temp
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apikey = "d4344c6ea95063be2031ed54ff742e0b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getLocation);
