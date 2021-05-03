import React, { useEffect, useState } from 'react';
import './Main.css';
import axios from 'axios';
import Parameters from './Parameters';
import Next from './forecast/Next';

const Main = () => {
  const [temp, setTemp] = useState([]);
  const [feel, setFeel] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [wind, setWind] = useState([]);

  useEffect(() => {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=metric&appid=aa2a5fcc4cb630593c42dbf9b522de88')
      .then(res => {
        setTemp(Math.round(res.data.main.temp));
        setFeel(Math.round(res.data.main.feels_like));
        setHumidity(Math.round(res.data.main.humidity));
        setWind(Math.round(res.data.wind.speed * 3.6));
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='Main'>
      <div className='weather-container'>
        <div className='background'>
          <div className='temperature'>
            <div className='index'>
              <div>
                <h1>{temp}&#176;</h1>
                <p className='clouds'>Sunny</p>
              </div>
              <div className='row'>
                <Parameters text='RealFeel' num={feel} icon='&#176;' />
                <hr className='vertical-line' />
                <Parameters text='Humidity' num={humidity} icon='%' />
                <hr className='vertical-line' />
                <Parameters text='Wind' num={wind} icon='km/h' />
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