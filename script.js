let apikey="3df4368fa1f6885556db4792e3e52227";

let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbox = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");

async function checkweather(city){
    let response= await fetch(apiurl + city +`&appid=${apikey}`)
    let data= await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})

