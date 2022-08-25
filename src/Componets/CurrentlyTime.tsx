import React, {useEffect, useState} from 'react';
import moment from "moment/moment";
import styles from "./CurrentlyTime.module.scss";

export function CurrentlyTime() {
    const [time, setCurrentlyTime] = useState('');

    useEffect(() => {
        setTimeout(() => {
            let currentlyTime = moment().format('MMMM Do YYYY, h:mm:ss a');
            setCurrentlyTime(currentlyTime);
        }, 1000);
    }, )

    return (
        <header className={styles.header}>
            <p>{time}</p>
        </header>
    )
}