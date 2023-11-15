import React, {useEffect, useState} from "react";
import axios from "axios";
import {Weather} from "../store/types/types";
import {storage} from "../context/storage/Storage";


interface Props {
    city: string

}

const initializeState = {
    current: {
        temp_c: '20',
        humidity: '70'
    }
}


const WeatherService = (props: Props) => {
    const weatherApi = axios.create({
        baseURL: 'https://api.weatherapi.com/v1/current.json?',
        params: {
            key: 'e9085857356649e5a02122632231411', // Replace with your actual API key
        }
    });


    const [weatherData, setWeatherData] = useState<Weather>(initializeState);
    const [error, setError] = useState(null);
    const city = storage.getItem('selected_city').city || 'Visaginas';


    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await weatherApi.get<Weather>('', {
                        params: {
                            q: city,
                        }
                    });
                    storage.setItem('temperature', weatherData.current.temp_c)
                } catch (error) {
                    console.log('This is Sparta or No internet connection');
                }
            };
            fetchData().then();
        }, [city])



    return (
        <div></div>
    )


}


export default WeatherService