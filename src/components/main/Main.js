import React, { useEffect, useState } from 'react';
import './Main.css';
import axios from 'axios';
import Parameters from './Parameters';
import Next from './forecast/Next';
import conditions from './forecast/Conditions';

const Main = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=metric&appid=aa2a5fcc4cb630593c42dbf9b522de88')
      .then(res => {
        const data = res.data;
        console.log(data)
        setWeather({
          temp: Math.round(data.main.temp),
          feel: data.main.feels_like,
          humidity: data.main.humidity,
          wind: data.wind.speed * 3.6,
          icon: data.weather[0].icon,
          condition: data.weather[0].main,
        });
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='Main'>
      <div className='weather-container'>
        <div className='background'>
          <div className='temperature'>
            <div className='index'>
              <div className='flex'>
                <img className='weather-today' alt='sunny' src={conditions(weather.icon)} />
                <div>
                  <h1> {weather.temp} &#176;</h1>
                  <p className='clouds'>{weather.condition}</p>
                </div>
              </div>
              <div className='row'>
                <Parameters text='RealFeel®' num={weather.feel} icon='&#176;' />
                <hr className='vertical-line' />
                <Parameters text='Humidity' num={weather.humidity} icon='%' />
                <hr className='vertical-line' />
                <Parameters text='Wind' num={weather.wind} icon='km/h' />
              </div>
            </div>
            <div className="index">
              <h1 className='city'>Tbilisi</h1>
              <hr className='white-line' />
            </div>
          </div>
        </div>
        <div className='black-line'>
        </div>
        <div className='weekdays'>
          <Next />
        </div>
      </div>
    </div>
  )
}

export default Main