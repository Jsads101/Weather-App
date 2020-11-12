
startUp();

async function startUp(){
    navigator.geolocation.getCurrentPosition(async position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(lat, long);
    // document.getElementById("lat").textContent = lat;
    // document.getElementById("long").textContent = long;
    const api_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=metric&appid=ccd0635e04093f8a9f29ccafa866df0e`
    fetch(api_url).then(async (response) => {
        const data = await response.json();
        const temp = data.main.temp;
        const feels_like = data.main.feels_like;
        const description = data.weather[0].description;
        document.getElementById("temp").textContent = temp  + " degrees celsius";;
        document.getElementById("feels_like").textContent = feels_like  + " degrees celsius";;
        document.getElementById("description").textContent = description;
      })
    });
}

// async function getWeather(city){
// console.log(city)
//     const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ccd0635e04093f8a9f29ccafa866df0e`
//     fetch(api_url).then(async (response) => {
        // const data = await response.json();
        // const temp = data.main.temp;
        // const feels_like = data.main.feels_like;
        // const description = data.weather[0].description;
        // document.getElementById("temp").textContent = temp  + " degrees celsius";;
        // document.getElementById("feels_like").textContent = feels_like + " degrees celsius";
        // document.getElementById("description").textContent = description;
        
//       })
//     };

    async function getWeather(){
        const city = document.getElementById("cityInput").value
        console.log(city)
        const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ccd0635e04093f8a9f29ccafa866df0e`
        fetch(api_url).then(async (response) => {
            const data = await response.json();
            const temp = data.main.temp;
            const feels_like = data.main.feels_like;
            const description = data.weather[0].description;
            document.getElementById("temp").textContent = temp  + " degrees celsius";;
            document.getElementById("feels_like").textContent = feels_like + " degrees celsius";
            document.getElementById("description").textContent = description;
                
              })
            };

   
