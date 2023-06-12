
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

