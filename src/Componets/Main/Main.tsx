import React, {useState, useEffect} from 'react';
import {Weather} from './Weather';

export function Main() {
    const [city, setCity] = useState('london');
    const [data, setData] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY_WEATHER_APP}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
            .catch(() => console.error('Brak dostępnych zapytań do api'))
    }, []);


    return <main>
        <Weather />
    </main>
}