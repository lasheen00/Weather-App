getforecast("cairo");

document.querySelector(".input-search").addEventListener("submit", function (e) {
  e.preventDefault();
});
let current;
let city;
let forecast;
let findInput = document.getElementById("findInput");
let searchBtn = document.getElementById("searchBtn");


findInput.addEventListener("input", function () {
    getforecast(findInput.value);
    
  });
  
  async function getforecast(term) {
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=54a600c068ab4ceea7962243240912&q=${term}&days=10&aqi=no&alerts=no`);
    let responseData = await response.json();
  
    if (response.status >= 200 && response.status < 300) {
      current = responseData.current;
      city = responseData.location;
      forecast = responseData.forecast.forecastday;
  
      displayCurrent(current, city);
      displayForecast(forecast);
    }
  }




  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  


  
function displayCurrent(c , l ) {
    var e = new Date(l.localtime.replace(" ", "T"));
    let current =
    `
    <div>
        <div class="d-flex justify-content-between">
            <p>${days[e.getDay()]}</p>
            <p>${e.getDate() + " " + monthNames[e.getMonth()]}</p>
        </div>
        <div>
            <h3>${l.name}</h3>
            <h4>${c.temp_c}<sup>o</sup>C</h4>
            <img src="https:${c.condition.icon}" style="width: 100px; height: 100px;" alt="">
        </div>
        <span>${c.condition.text}</span>
        <div class="mt-5 d-flex w-75 justify-content-between">
            <p><img src="photos/icon-umberella@2x.png" style="width: 25px; height: 25px;" alt=""> ${c.humidity}%</p>
            <p><img src="photos/icon-wind@2x.png " style="width: 25px; height: 25px;" alt=""> ${c.wind_kph}km/h</p>
            <p><img src="photos/icon-compass@2x.png" style="width: 25px; height: 25px;" alt=""> ${c.wind_dir}</p>
        </div>
    </div>
    

      `;
      document.getElementById("current").innerHTML = current;
}


function displayForecast(f) {
    let forecastdays = "";
    for (let i = 1; i <= 2; i++)
    {
        forecastdays +=`
        
        <div class="col-md-6 border border-3 border-white border-opacity-75 bg-transparent " style="height: 450px;" >
        <div>
            <div class="d-flex justify-content-center ">
                <p>${days[new Date(f[i].date.replace(" ", "T")).getDay()]}</p>
            </div>
            <div class="text-center" >
                <img src="https:${f[i].day.condition.icon}" alt="" class="m-5">
                <div  class="mb-5">
                    <h5>${f[i].day.maxtemp_c} <sup>o</sup>C</h5>
                    <h6> ${f[i].day.mintemp_c} <sup>o</sup>C</h6>
                </div>
                <span>${f[i].day.condition.text}</span>
            </div>
        </div>
        </div>
        
  
    
        `
    }

    document.getElementById("rowData").innerHTML = forecastdays;

}

















































  
// function displayCurrent(c, l) {
//     var e = new Date(l.localtime.replace(" ", "T"));
//     let current =
//     `<div>
//           <div class="d-flex justify-content-between">
//             <p>${days[e.getDay()]}</p>
//             <p>${
//                 e.getDate() + " " + monthNames[e.getMonth()]
//               }</p>
//           </div>
//           <div>
//             <h3>${l.name}</h3>
//             <h4>${c.temp_c}<sup>o</sup>C</h4>
//           <img src="https:${
//             c.condition.icon
//           }" style="width: 100px; height: 100px;" alt="">
//           </div>
//           <span>${c.condition.text}</span>
//           <div class="mt-5 d-flex w-75 justify-content-between">
//             <p><img src="photos/icon-umberella@2x.png" style="width: 25px; height: 25px;" alt=""> ${c.humidity}%</p>
//             <p><img src="photos/icon-wind@2x.png " style="width: 25px; height: 25px;" alt=""> ${c.wind_kph}km/h</p>
//             <p><img src="photos/icon-compass@2x.png" style="width: 25px; height: 25px;" alt=""> ${c.wind_dir}</p>
//           </div>
//         </div>
//       `;
//       document.getElementById("current").innerHTML = current;
// }