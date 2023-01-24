import { API_KEY, URL } from '../../Service/Service';

import { useState, useEffect } from "react";
import { SvgSprite } from '../SvgSprite';

export const City = () => {
  const [cityArr, setCityArr] = useState([]);
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/timezone/Europe/London`)
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        setDate(data.datetime);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  
  useEffect(() => {
    setIsLoading(true);
    fetch(`${URL}?q=Moscow&units=metric&appid=${API_KEY}`)
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        setIsLoading(false);
        setCityArr(data);
        console.log(data);
      }
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
  }, []);
  
  function getCurrentMonthName(dt) {
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthList[dt.getMonth()];
  }
  
  const dateUtc = new Date(date).getTime();
  const dateCity = new Date(dateUtc + cityArr.timezone);
  const yearDateCity = dateCity.getFullYear();
  const monthDateCity = getCurrentMonthName(dateCity);
  const dayDateCity = dateCity.getDate();
  const dayNameDateCity = dateCity.toLocaleString("en-us", {weekday: "long"});
  const hoursDateCity = dateCity.getHours();
  const minutesDateCity = dateCity.getMinutes();
  
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="city-item">
          <div className="city-item__bg"
               style={hoursDateCity > 16
                 ? {backgroundImage: "url(../img/night.jpg)"}
                 : {backgroundImage: "url(../img/day.jpg)"}
               }>
            
          </div>
          <div className="city-item__header">
            <div className="city-item__header--icon">
              {(cityArr.weather[0].id >= 200) && (cityArr.weather[0].id <= 321)
                ? <SvgSprite id={"200"}/> : null}
              {(cityArr.weather[0].id >= 500) && (cityArr.weather[0].id <= 511)
                ? <SvgSprite id={"500"}/> : null}
              {(cityArr.weather[0].id >= 520) && (cityArr.weather[0].id <= 531)
                ? <SvgSprite id={"521"}/> : null}
              {(cityArr.weather[0].id >= 600) && (cityArr.weather[0].id <= 622)
                ? <SvgSprite id={"600"}/> : null}
              {(cityArr.weather[0].id >= 701) && (cityArr.weather[0].id <= 771)
                ? <SvgSprite id={"701"}/> : null}
              {cityArr.weather[0].id === 781
                ? <SvgSprite id={"781"}/> : null}
              {cityArr.weather[0].id === 800
                ? <SvgSprite id={"800"}/> : null}
              {cityArr.weather[0].id === 801
                ? <SvgSprite id={"801"}/> : null}
              {cityArr.weather[0].id === 802
                ? <SvgSprite id={"800"}/> : null}
              {cityArr.weather[0].id === 803 || cityArr.weather[0].id === 804
                ? <SvgSprite id={"803"}/> : null}
            </div>
            <div className="city-item__header--loc">
              <SvgSprite id={"loc"}/>
              <h2>{cityArr.name}, {cityArr.sys.country}</h2>
            </div>
          </div>
          <div className="city-item__content">
            <p className="city-item__content--temp">{Math.ceil(cityArr.main.temp)}&#176;</p>
              <p className="city-item__content--date">
                <span>{dayDateCity || "--" }</span>
                <span>{monthDateCity || "--"}</span>
                <span>{yearDateCity || "--"}</span>
              </p>
              <p className="city-item__content--time">
                <span>{dayNameDateCity || "--"}</span>
                <span>{hoursDateCity || "--"}</span>
                <span>:</span>
                <span>
                  {minutesDateCity < 10
                    ? `0` + minutesDateCity
                    : minutesDateCity
                  }
                </span>
              </p>
          </div>
        </section>
      )}
    </>
  );
};