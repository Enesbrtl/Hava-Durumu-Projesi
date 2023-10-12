let url = "https://api.openweathermap.org/data/2.5/weather";
let apikey ="2dd833e7fb5945f60602fa554da8e4cd";

const body = document.querySelector("#searchInput");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click",function(){
    let searchText = searchInput.value;
    sendRequest(searchText)
    searchInput.value=""
})

searchInput.addEventListener("keypress", setquery)

function setquery(e){
    if(e.key =="Enter"){
        let searchText = searchInput.value;
        sendRequest(searchText)
        }
}


function sendRequest(newCity){
    let query = `${url}?q=${newCity}&appid=${apikey}&units=metric&lang-tr`
    fetch(query)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        const city = document.querySelector("#city");
        city.innerHTML=data.name

        const temp = document.querySelector("#temp");
        temp.innerHTML= `${Math.round(data.main.temp)}°C`

        const desc=document.querySelector("#desc");
        desc.innerHTML= data.weather[0].description.toUpperCase()

        const minmax= document.querySelector("#minmax");
        minmax.innerHTML=`${Math.round(data.main.temp_min)}°C/ ${Math.round(data.main.temp_max)}°C`
    })

}
