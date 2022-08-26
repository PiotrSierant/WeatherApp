import React from 'react';

type WeatherType = {
    info: Info | any;
}
type Info = {
    main: Object;
    name: string;
    wind: Object;
    weather: Array<Object>;
}


export const Weather: React.FC<WeatherType> = ({info}) => {
    const {main, name, wind, weather} = info
    console.log(main, name, wind, weather)
    return <section>
        sekcja pogody
    </section>
}