import { API_KEY, URL } from '../../Service/Service';

import { useState, useEffect } from "react";

export const City = () => {
  const [cityArr, setCityArr] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${URL}?q=Kiev&appid=${API_KEY}&units=metric`);
        const cityArr = await res.json();
        setCityArr(cityArr);
        console.log(cityArr);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="city-item">
          <div className="city-item__header">
            <div className="city-item__header__temp">
              <p>{cityArr.main.temp}</p>
              <p>{cityArr.weather[0].description}</p>
            </div>
            <div className="city-item__header__img">
            
            </div>
          </div>
          <div className="city-item__footer">
            <h2>{cityArr.name}, {cityArr.sys.country}</h2>
            <p>
              <span>{cityArr.main.temp_min}</span>
              <span> - </span>
              <span>{cityArr.main.temp_max}</span>
            </p>
          </div>
        </section>
      )}
    </>
  );
}