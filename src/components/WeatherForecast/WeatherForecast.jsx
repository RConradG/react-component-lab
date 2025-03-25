import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx'
import WeatherData from '../WeatherData/WeatherData.jsx'

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className='weather'>
      <h2>Day of the Week: {day}</h2>
      <WeatherIcon src={img} alt={imgAlt} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  )
};

export default WeatherForecast;
