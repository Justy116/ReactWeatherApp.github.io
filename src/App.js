import { useState } from "react"


const App = () => {

  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("");
  const apiKey = "4aec3d6fb9291123207742b65e1c4809";


  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWeatherData(data)
          setCity("")
        })
    }
  }


  return (
    <div>
      <h1 className="title">Weather App</h1>
      <input className="input" type="text" value={city}
        placeholder="Search City..."
        onChange={e => setCity(e.target.value)} 
        onKeyPress={getWeather}
      />
      {typeof weatherData.main === 'undefined' ? (
        <div></div>
      ) : (
        <div className="results">
          <p>{ weatherData.name }</p>
          <p>{ Math.round(weatherData.main.temp) - 273 + " °C" }</p>
          <p>{ weatherData.weather[0].main }</p>
        </div>
      )}
    </div>

  )
}

export default App
