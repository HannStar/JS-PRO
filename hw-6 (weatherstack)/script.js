let button = document.getElementById("button");

let form = document.forms.info;

button.addEventListener("click", getValue);

function getValue() {
  let nameCountry = form.elements.country;
  let nameCity = form.elements.city;

  fetch(
    `http://api.weatherstack.com/current?access_key=87083344585d5ba06a482863c069f8e9&query=${nameCity.value},${nameCountry.value}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".query").textContent = data.request.query;

      document.querySelector(".logo-weather").src =
        data.current.weather_icons[0];

      document.querySelector(".sky").textContent =
        data.current.weather_descriptions[0];

      document.querySelector(".temperature > span").textContent =
        data.current.temperature;

      document.getElementById("wind").textContent = data.current.wind_speed;
      document.getElementById("precip").textContent = data.current.precip;
      document.getElementById("humidity").textContent = data.current.humidity;
    })
    .catch(() => alert("Verify the data is correct"));
}
