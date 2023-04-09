import { useState, useEffect } from 'react'
import { usePosition } from 'hooks/usePosition/UsePosition'
import './Weather.scss'
import HotWeather from '@mui/icons-material/WbSunny'
import ColdWeather from '@mui/icons-material/AcUnit'
import AirIcon from '@mui/icons-material/Air'
import CloudIcon from '@mui/icons-material/Cloud'
type PropsStateWeather = {
    iconSrc: string
    nameCity: string
    temp: number
    description: string
    maxTemp: number
    minTemp: number
    speedWind: number
    cloud: number
    isClicked: boolean
}

const Weather = () => {
    const { latitude, longitude } = usePosition()

    const [city, setCity] = useState<string>('Lviv')
    const [weatherInfo, setWeatherInfo] = useState<PropsStateWeather>({
        iconSrc: '',
        nameCity: city,
        temp: 0,
        description: '',
        maxTemp: 0,
        minTemp: 0,
        speedWind: 0,
        cloud: 0,
        isClicked: false,
    })

    const handleChangeMarking = () => {
        setWeatherInfo((prevState) => ({
            ...prevState,
            isClicked: !prevState.isClicked,
        }))
    }
    useEffect(() => {
        const fetchCity = async () => {
            try {
                const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
                const response = await fetch(url)
                const data = await response.json()

                if (data.address.city) {
                    setCity(data.address.city)
                } else if (data.address.town) {
                    setCity(data.address.town)
                } else if (data.address.village) {
                    setCity(data.address.village)
                } else {
                    setCity('unknown')
                }
            } catch (error) {
                console.error(error)
            }
        }

        if (latitude && longitude) {
            fetchCity()
        }
    }, [latitude, longitude])

    useEffect(() => {
        const fetchDataWeather = async () => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
                const response = await fetch(url)
                const data = await response.json()

                setWeatherInfo((prevState) => ({
                    ...prevState,
                    iconSrc: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                    nameCity: data.name,
                    temp: !prevState.isClicked
                        ? Math.ceil(data.main.temp)
                        : Math.ceil(data.main.temp * 1.8 + 32),
                    description: data.weather[0].description,
                    maxTemp: !prevState.isClicked
                        ? Math.ceil(data.main.temp_max)
                        : Math.ceil(data.main.temp_max * 1.8 + 32),
                    minTemp: !prevState.isClicked
                        ? Math.floor(data.main.temp_min)
                        : Math.floor(data.main.temp_min * 1.8 + 32),
                    speedWind: data.wind.speed,
                    cloud: data.clouds.all,
                }))
            } catch (error) {
                console.log(error)
            }
        }
        if (city) {
            fetchDataWeather()
        }
    }, [city, weatherInfo.isClicked])

    return (
        <>
            <div className="weather-top-info__wrapper">
                <h3 className="weather-top-info__title">
                    {weatherInfo.nameCity}
                </h3>
                <p className="weather-top-info__description">
                    {weatherInfo.description}
                </p>
            </div>
            <div className="weather-mid-info__wrapper">
                <div className="weather-mid-info__wrapper-image">
                    <img
                        src={weatherInfo.iconSrc}
                        className="weather-mid-info__image"
                        alt="weather icon"
                    />
                </div>
                <div
                    className="weather-mid-info__temp-wrapper"
                    onClick={handleChangeMarking}
                >
                    <span className="weather-mid-info__temp">
                        {weatherInfo.temp}
                    </span>
                    <div className="weather-mid-info__marking-wrapper">
                        <span className="weather-mid-info__circle">°</span>
                        <span className="weather-mid-info__unit">
                            {weatherInfo.isClicked ? 'F' : 'C'}
                        </span>
                    </div>
                </div>
                <div className="weather-mid-info__max-min-temp-wrapper">
                    <div className="weather-mid-info__max-min-temp-icon-item-wrapper">
                        <HotWeather className="weather-mid-info__max-temp-icon" />
                        <span className="weather-mid-info__max-min-temp__temp-number">
                            {weatherInfo.maxTemp}
                        </span>
                        <span className="weather-mid-info__max-min-temp__circle">
                            °
                        </span>
                    </div>
                    <div className="weather-mid-info__max-min-temp-icon-item-wrapper">
                        <ColdWeather className="weather-mid-info__min-temp-icon" />
                        <span className="weather-mid-info__max-min-temp__temp-number">
                            {weatherInfo.minTemp}
                        </span>
                        <span className="weather-mid-info__max-min-temp__circle">
                            °
                        </span>
                    </div>
                </div>
            </div>
            <div className="weather-bottom-info__wrapper">
                <div className="weather-bottom-info">
                    <div className="weather-bottom-info__item">
                        <AirIcon />
                        <span className="weather-bottom-info__text">
                            {weatherInfo.speedWind} kmh
                        </span>
                    </div>
                    <div className="weather-bottom-info__item">
                        <CloudIcon />
                        <span className="weather-bottom-info__text">
                            {weatherInfo.cloud} %
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather
