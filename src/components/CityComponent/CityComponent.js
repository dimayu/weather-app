import { useState, useEffect } from "react";

function CityComponent() {
    const [cityArr, setCityArr] = useState([]);
    const cityArrNew = {
        city: null,
        temp_max: null,
        temp_min: null,
        humidity: null,
        pressure: null,
        weather: null,
        wind: null
    };

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=52da8a055eb45d78caf413130f35ad34&units=metric`)
                const cityArr = await res.json()
                setCityArr(cityArr)
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])

    cityArrNew.city = cityArr.name;
    cityArrNew.country = cityArr.sys.country;
    cityArrNew.temp = cityArr.main.temp;
    cityArrNew.temp_max = cityArr.main.temp_max;
    cityArrNew.temp_min = cityArr.main.temp_min;
    cityArrNew.humidity = cityArr.main.humidity;
    cityArrNew.pressure = cityArr.main.pressure;
    cityArrNew.weather = cityArr.weather[0].description;
    cityArrNew.wind = cityArr.wind.speed;

    console.log(cityArrNew);

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section className="city-item">
                    <div className="city-item__header">
                        <div className="city-item__header__temp">
                            <p>{cityArrNew.temp}</p>
                            <p>{cityArrNew.weather}</p>
                        </div>
                        <div className="city-item__header__img">

                        </div>
                    </div>
                    <div className="city-item__footer">
                        <h2>{cityArrNew.city}, {cityArrNew.country}</h2>
                        <p>
                            <span>{cityArrNew.temp_min}</span>
                            <span>-</span>
                            <span>{cityArrNew.temp_max}</span>
                        </p>
                    </div>
                </section>
            )}
        </>
    )
}

export default CityComponent;