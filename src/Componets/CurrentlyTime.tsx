import React, {useEffect, useState} from 'react';
import moment from "moment/moment";


export function CurrentlyTime() {
    const [time, setCurrentlyTime] = useState('');

    useEffect(() => {
        setTimeout(() => {
            let currentlyTime = moment().format('MMMM Do YYYY, h:mm:ss a');
            setCurrentlyTime(currentlyTime);
        }, 1000);
    }, )

    return (
        <section>
            <p>{time}</p>
        </section>
    )
}