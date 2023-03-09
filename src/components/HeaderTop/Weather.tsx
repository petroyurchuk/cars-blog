import { useState, useEffect } from 'react'

import './Weather.scss'

let globalNumber = 0
let tempMarking = 'C'
type Props = {}
const Weather = (props: Props) => {
    const [iconSrc, setIconSrc] = useState('')
    const [temp, setTemp] = useState(0)
    const [tempFaringeint, setTempFaringeint] = useState(0)
    const [majorTemp, setMajorTemp] = useState(temp.toString())
    const [city, setCity] = useState('')
    const changeTemp = () => {
        if (!globalNumber) {
            setMajorTemp(tempFaringeint.toString().substr(0, 5))
            tempMarking = 'F'
            globalNumber += 1
        } else {
            setMajorTemp(temp.toString())
            tempMarking = 'C'
            globalNumber = 0
        }
    }
    useEffect(() => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19'
        )
            .then((resolve) => resolve.json())
            .then((data) => {
                const icon = data.weather[0].icon
                const iconSrc = `https://openweathermap.org/img/w/${icon}.png`
                setIconSrc(iconSrc)
                const temp = data.main.temp
                setTemp(temp)
                setMajorTemp(temp)
                const tempFaringeint = temp * 1.8 + 32
                setTempFaringeint(tempFaringeint)
                setCity(data.name)
            })
    }, [])
    return (
        <div className="weather-wrapper">
            <img className="weather__icon" src={iconSrc} alt="weather icon" />
            <div className="weather__temp-wrapper">
                <span className="weather__temp" onClick={changeTemp}>
                    {majorTemp}
                </span>
                <span className="weather__temp-marking">{tempMarking}</span>
            </div>

            <span className="weather__city">{city}</span>
        </div>
    )
}
export default Weather
