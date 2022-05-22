const button = document.getElementById("button")
const searchCity = document.getElementById("searchCity")

button.addEventListener("click", () => {
    const value = searchCity.value

    console.log(value);

    fetch('/search', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ value })
        })
        .then((res) => res.json())
        .then((res) => {
            console.log('response: ', res)
            showData(res)
        }).catch((err) => {

        })


})



function showData(res) {

    const err = document.getElementById("err")
    const cityName = document.getElementById("cityName")
    const wetherDesc = document.getElementById("wetherDesc")
    const wicon = document.getElementById("wicon")
    const minTemp = document.getElementById("minTemp")
    const maxTemp = document.getElementById("maxTemp")
    const windSpeed = document.getElementById("windSpeed")
    const humidity = document.getElementById("humidity")


    if (res.message) {
        err.innerHTML = res.message
    }

    const iconCode = res.weather[0].icon
    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";


    cityName.innerHTML = `City : ${res.name}`
    wetherDesc.innerHTML = `${res.weather[0].main}`
    wicon.setAttribute("src", iconUrl)
    minTemp.innerHTML = `Min Temperature =  ${res.main.temp_min}&deg C  `
    maxTemp.innerHTML = ` ${res.main.temp_max}&deg C`
    windSpeed.innerHTML = `Wind Speed = ${res.wind.speed }`
    humidity.innerHTML = `Humidity =  ${res.main.humidity} `

    const weather = res.weather[0].main


}