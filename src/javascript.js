function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let laCurrentTime = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = laCurrentTime.format("D MMMM YYYY");
  losAngelesTime.innerHTML = laCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTime = sydneyElement.querySelector(".time");
  let syCurrentTime = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = syCurrentTime.format("D MMMM YYYY");
  sydneyTime.innerHTML = syCurrentTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
