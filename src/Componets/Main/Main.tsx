import React, {useState} from 'react';
import {TextField} from "@mui/material";
import styles from './Main.module.scss';
import {Weather} from "./Weather";

export function Main() {
    const [data, setData] = useState();
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY_WEATHER_APP}`

    const searchWeather = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    setData(response)
                })
                .catch(() => console.error('Brak dostępnych zapytań do api'))
            setLocation('')
        }
    }

    return <main className={styles.main}>
        <TextField label="Enter location"
                   variant="outlined"
                   value={location}
                   onChange={event => setLocation(event.target.value)}
                   onKeyPress={searchWeather}
                   type="text"
        />
        <Weather />
    </main>
}