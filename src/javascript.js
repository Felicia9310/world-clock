function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let laCurrentTime = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = laCurrentTime.format("D MMMM YYYY");
    losAngelesTime.innerHTML = laCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date");
    let sydneyTime = sydneyElement.querySelector(".time");
    let syCurrentTime = moment().tz("Australia/Sydney");

    sydneyDate.innerHTML = syCurrentTime.format("D MMMM YYYY");
    sydneyTime.innerHTML = syCurrentTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("D MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);
