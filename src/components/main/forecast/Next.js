import React, { useEffect, useState } from 'react';
import './Next.css';
import axios from 'axios';
import Card from './Card';

const Next = () => {
  const [temp, setTemp] = useState({})

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const today = new Date();
  const day = today.getDay();
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 1);
  const twoDaysAfter = new Date(dayAfter);
  twoDaysAfter.setDate(twoDaysAfter.getDate() + 1);
  const threeDaysAfter = new Date(twoDaysAfter);
  threeDaysAfter.setDate(threeDaysAfter.getDate() + 1);

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/onecall?lat=41.6941&lon=44.8337&units=metric&cnt=14&exclude=hourly,minutely&appid=fd5179b748f76ec3198fcf32fa82a64b')
      .then(res => {
        console.log(res.data);
        const data = res.data;
        setTemp({
          min: data.daily[0].temp.min,
          max: data.daily[0].temp.max,
          minTomorrow: data.daily[1].temp.min,
          maxTomorrow: data.daily[1].temp.max,
          minDayAfter: data.daily[2].temp.min,
          maxDayAfter: data.daily[2].temp.max,
          minTwoDays: data.daily[3].temp.min,
          maxTwoDays: data.daily[3].temp.max,
          minThreeDays: data.daily[4].temp.min,
          maxThreeDays: data.daily[4].temp.max
        });
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='forecast'>
      <div className='weather-card'>
        <Card day={weekdays[day]}
          date={today.getDate() + ' ' + months[today.getMonth()]}
          img='/transparent-weather-4.png'
          min={temp.min}
          max={temp.max} />
      </div>
      <div className='weather-card'>
        <Card day={weekdays[tomorrow.getDay()]}
          date={tomorrow.getDate()
            + ' ' + months[tomorrow.getMonth()]}
          img='/unnamed.png'
          min={temp.minTomorrow}
          max={temp.maxTomorrow}
        />
      </div>
      <div className='weather-card'>
        <Card day={weekdays[dayAfter.getDay()]} text={tomorrow}
          date={dayAfter.getDate() + ' ' + months[dayAfter.getMonth()]}
          img='/rain.png'
          min={temp.minDayAfter}
          max={temp.maxDayAfter}
        />
      </div>
      <div className='weather-card'>
        <Card day={weekdays[twoDaysAfter.getDay()]} text={tomorrow}
          date={twoDaysAfter.getDate() + ' ' + months[twoDaysAfter.getMonth()]}
          img='/rain.png'
          min={temp.minTwoDays}
          max={temp.maxTwoDays}
        />
      </div>
      <div className='weather-card'>
        <Card day={weekdays[threeDaysAfter.getDay()]} text={tomorrow}
          date={threeDaysAfter.getDate() + ' ' + months[threeDaysAfter.getMonth()]}
          img='/transparent-weather-4.png'
          min={temp.minThreeDays}
          max={temp.maxThreeDays}
        />
      </div>
    </div>
  )
}

export default Next