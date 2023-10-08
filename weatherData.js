const apiKey = "98a58f40e887a6c3047e5c38c0ab6019";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.getElementById("submitBtn");
const weatherImg= document.querySelector(".weatherImg") ;
const weatherDiv= document.querySelector(".weatherData");
const errorMessage=document.querySelector(".error");


async function weatherData(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
if(response.status== 404){
    errorMessage.style.display="block";
    weatherDiv.style.display="none";
    return;

}

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + `\xB0` + "c";

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main== "Clear")
{
    weatherImg.src="./images/clear.png"
}
else if(data.weather[0].main== "Smoke")
{
    weatherImg.src="./images/clouds.png"
}
else if(data.weather[0].main== "Clouds")
{
    weatherImg.src="./images/clouds.png"
}
else if(data.weather[0].main== "Drizzle")
{
    weatherImg.src="./images/drizzle.png"
}
else if(data.weather[0].main== "Mist")
{
    weatherImg.src="./images/mist.png"
}
else if(data.weather[0].main== "Rain")
{
    weatherImg.src="./images/rain.png"
}
else if(data.weather[0].main== "Snow")
{
    weatherImg.src="./images/snow.png"
}
else
{
    weatherImg.src="./images/clear.png"
}

weatherDiv.style.display="flex";
errorMessage.style.display="none";


}

searchBtn.addEventListener("click", ()=> {
  weatherData(searchBox.value);

});
