const apiKey = `182aa2c63a537687d37203b245b80957`;
const form = document.querySelector("form");
const searchInput = document.getElementById("search-input");
// console.log(searchInput)
const appContainer = document.getElementById("app-container");
const body1 = document.querySelector("#body1");

const getWeather = async (city) => {
    // setTimeout(() => {
    appContainer.innerHTML = `<h2 id="notFound">Loading....<h2>`
    // }, -5000)
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(api);
    const data = await response.json()
    return showWeather(data);
}

const showWeather = (data) => {
    // console.log(data)
    if (data.cod === "404") {
        appContainer.innerHTML = `<h2 id="notFound"> City Not Found <h2>`
        return;
    }
    appContainer.innerHTML = `
        <div id="location">
        <p>${data.name}</p>
        </div>
        <div id="temp">
        <img id="temp-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <p><span class="qadeer" id="temp-value">${Math.floor(data.main.temp)}</span><span class="qadeer" id="temp-unit">&#176C</span></p>
        <p id="climate">${data.weather[0].main}</p>
        </div>
        
        `
    if (data.weather[0].main === "Smoke") {
        body1.className = "big";
    }
    else if (data.weather[0].main === "Clear") {
        body1.className = "clear";
    }
    else if (data.weather[0].main === "Clouds") {
        body1.className = "clouds"
    }
    else if (data.weather[0].main === "Haze") {
        body1.className = "haze"
    }
    else if (data.weather[0].main === "Rain") {
        body1.className = "rain"
    }
    else if (data.weather[0].main === "Mist") {
        body1.className = "mist"
    }
    else if (data.weather[0].main === "Sunny") {
        body1.className = "sunny"
    }
}


form.addEventListener("submit", (event) => {
    getWeather(searchInput.value);
    searchInput.value = " ";
    event.preventDefault();
})

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("not supported");
    }
})

const showPosition = async (position) => {
    let lat = Math.round(position.coords.latitude);
    let long = Math.round(position.coords.longitude);
    const qadeerApi = `
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&lang={lang}&units=metric
    `
    const response = await fetch(qadeerApi);
    const data = await response.json()
    appContainer.innerHTML = `
        <div id="location">
        <p>${data.name}</p>
        </div>
        <div id="temp">
        <img id="temp-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <p><span class="qadeer" id="temp-value">${Math.floor(data.main.temp)}</span><span class="qadeer" id="temp-unit">&#176C</span></p>
        <p id="climate">${data.weather[0].main}</p>
        </div>
        
        `
    if (data.weather[0].main === "Smoke") {
        body1.className = "big";
    }
    else if (data.weather[0].main === "Clear") {
        body1.className = "clear";
    }
    else if (data.weather[0].main === "Clouds") {
        body1.className = "clouds"
    }
    else if (data.weather[0].main === "Haze") {
        body1.className = "haze"
    }
    else if (data.weather[0].main === "Rain") {
        body1.className = "rain"
    }
    else if (data.weather[0].main === "Mist") {
        body1.className = "mist"
    }
    else if (data.weather[0].main === "Sunny") {
        body1.className = "sunny"
    }
}