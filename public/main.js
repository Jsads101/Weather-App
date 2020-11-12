
startUp();

async function startUp(){
    document.getElementById("location").textContent = "Current Location"
    navigator.geolocation.getCurrentPosition(async position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    document.getElementById("lat").textContent = lat;
    document.getElementById("long").textContent = long;
    const api_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&&units=metric&appid=ccd0635e04093f8a9f29ccafa866df0e`
    fetch(api_url).then(async (response) => {
        const data = await response.json();
        const temp = data.main.temp;
        const feels_like = data.main.feels_like;
        const description = data.weather[0].description;
        document.getElementById("temp").textContent = temp  + " degrees celsius";;
        document.getElementById("feels_like").textContent = feels_like  + " degrees celsius";;
        document.getElementById("description").textContent = description;
        if(description.includes("rain")){
            console.log("rain")
            document.getElementById("weathericon").src="rain.svg";
        } else if(description.includes("cloud")){
            console.log("cloud")
            document.getElementById("weathericon").src="cloud.svg";
        } else if(description.includes("sun")){
            console.log("sun")
            document.getElementById("weathericon").src="sun.svg";
        } else if(description.includes("thunder")){
            console.log("cloud")
            document.getElementById("weathericon").src="thunder.svg";
        } else if(description.includes("snow")){
            console.log("cloud")
            document.getElementById("weathericon").src="snowy.svg";
        }
      })
    });
}


    async function getWeather(){
        const city = document.getElementById("cityInput").value
        document.getElementById("location").textContent = city
        
        const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ccd0635e04093f8a9f29ccafa866df0e`
        fetch(api_url).then(async (response) => {
            const data = await response.json();
            const lat = data.coord.lat;
            const long = data.coord.lon;
            document.getElementById("lat").textContent = lat;
            document.getElementById("long").textContent = long;
            const temp = data.main.temp;
            const feels_like = data.main.feels_like;
            const description = data.weather[0].description;
            document.getElementById("temp").textContent = temp  + " degrees celsius";;
            document.getElementById("feels_like").textContent = feels_like + " degrees celsius";
            document.getElementById("description").textContent = description;
            if(description.includes("rain")){
                console.log("rain")
                document.getElementById("weathericon").src="rain.svg";
            } else if(description.includes("cloud")){
                console.log("cloud")
                document.getElementById("weathericon").src="cloud.svg";
            } else if(description.includes("sun")){
                console.log("sun")
                document.getElementById("weathericon").src="sun.svg";
            } else if(description.includes("thunder")){
                console.log("cloud")
                document.getElementById("weathericon").src="thunder.svg";
            } else if(description.includes("snow")){
                console.log("cloud")
                document.getElementById("weathericon").src="snowy.svg";
            }
                
              })
            };

   
