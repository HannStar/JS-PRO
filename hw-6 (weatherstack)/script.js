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
      let current = data.current;
      let [query, icon, desciption, temp, windSpeed, precip, humidity] = [
        data.request.query,
        current.weather_icons[0],
        current.weather_descriptions[0],
        current.temperature,
        current.wind_speed,
        current.precip,
        current.humidity,
      ];
      document.querySelector(".query").textContent = query;

      document.querySelector(".logo-weather").src = icon;

      document.querySelector(".sky").textContent = desciption;

      document.querySelector(".temperature > span").textContent = temp;

      document.getElementById("wind").textContent = windSpeed;

      document.getElementById("precip").textContent = precip;

      document.getElementById("humidity").textContent = humidity;
    })
    .catch(() => alert("Verify the data is correct"));
}

let content = {};
