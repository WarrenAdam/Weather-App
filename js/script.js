
const apiKey = "31b1715eea27e8546c5192709d456eb7";
const mainEl = $("#main")

// onload defaults
let lat = "52.5";
let lon = "-1.95";
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&exclude=hourly`;
let cityName = "Birmingham";
let firstLoad = true;

// elements required
const searchBtn = $("#search-btn");
const searchDiv = $("#search");
const selectorDiv = $("#selector");
const prevSearchDiv = $("#previous-searches");

const kevlinToCelsius = tempKel => tempKel - 273.15; // -273.15 kelvin = 0 deg cel

const isInList = (currentId = "") => {
    if($(`[data-city-id="${currentId}"]`).length){
        return true;
    }else{
        return false;
    }
}

const populatePreviouslySearched = () => {
    let prevCitiesArr = getCitiesFromLocalStorage();
    for (i in prevCitiesArr) {

        const currentCityObj = {
        "cityLat" : prevCitiesArr[i].cityLat,
        "cityLon" : prevCitiesArr[i].cityLon,
        "cityName" : prevCitiesArr[i].cityName,
        "cityCountry" : prevCitiesArr[i].cityCountry,
        "cityId" : prevCitiesArr[i].cityId 
        };
    
        addToPreviouslySearched(currentCityObj);
    }
}

const clearPreviouslySearched = () => {
    window.localStorage.setItem("prevCities", "[]");
    $("#previous-searches").text("");
}

const addToPreviouslySearched = currentCityObj => {
    
    const cityLon = currentCityObj.cityLon;
    const cityLat = currentCityObj.cityLat;
    const cityName = currentCityObj.cityName;
    const cityCountry = currentCityObj.cityCountry;
    const cityId = currentCityObj.cityId;
    
    if(isInList(cityId)){
        $(`[data-city-id="${cityId}"]`).remove();
    }

    prevSearchDiv.prepend($(`<span>${cityName}, ${cityCountry}</span>`)
    .attr("data-city-lon", `${cityLon}`)
    .attr("data-city-lat", `${cityLat}`)
    .attr("data-city-name", `${cityName}`)
    .attr("data-city-country", `${cityCountry}`)
    .attr("data-city-id", `${cityId}`)
    .attr("class", "prev-searched")
    .on("click", loadNewData));
}

const addToLocalStorage = cityToAdd => {

    let prevCitiesArr = getCitiesFromLocalStorage();
    prevCitiesArr.push(cityToAdd);
    prevCitiesStr = JSON.stringify(prevCitiesArr);
    window.localStorage.setItem("prevCities", prevCitiesStr);
}

