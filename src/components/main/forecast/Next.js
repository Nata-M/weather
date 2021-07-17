import React, { useEffect, useState } from 'react';
import './Next.css';
import axios from 'axios';
import Card from './Card';
import conditions from './Conditions';
import { weekdays, months } from '../../date/Date';

const Next = () => {
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/onecall?lat=41.6941&lon=44.8337&units=metric&exclude=hourly,minutely&appid=fd5179b748f76ec3198fcf32fa82a64b')
      .then(res => {
        console.log(res.data);
        const data = res.data;
        setForecast([
          {
            min: data.daily[0].temp.min,
            max: data.daily[0].temp.max,
            date: new Date(data.daily[0].dt * 1000),
            src: data.current.weather[0].icon
          },
          {
            min: data.daily[1].temp.min,
            max: data.daily[1].temp.max,
            date: new Date(data.daily[1].dt * 1000),
            src: data.daily[1].weather[0].icon
          },
          {
            min: data.daily[2].temp.min,
            max: data.daily[2].temp.max,
            date: new Date(data.daily[2].dt * 1000),
            src: data.daily[2].weather[0].icon
          },
          {
            min: data.daily[3].temp.min,
            max: data.daily[3].temp.max,
            date: new Date(data.daily[3].dt * 1000),
            src: data.daily[3].weather[0].icon
          },
          {
            min: data.daily[4].temp.min,
            max: data.daily[4].temp.max,
            date: new Date(data.daily[4].dt * 1000),
            src: data.daily[4].weather[0].icon
          }
        ]);
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='forecast'>
      {forecast.map((elem, idx) => (
        <div key={idx} className='weather-card'>
          <Card
            day={weekdays[forecast[idx].date.getDay()]}
            date={forecast[idx].date.getDate() + ' ' + months[forecast[idx].date.getMonth()]}
            img={conditions(forecast[idx].src)}
            min={forecast[idx].min}
            max={forecast[idx].max}
          />
        </div>
      ))}
    </div>
  )
}

export default Next