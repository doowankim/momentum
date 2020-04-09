import React, {Component} from 'react';
import WeatherPresenter from "./WeatherPresenter";
import axios from 'axios';

class WeatherContainer extends Component {
    state = {
        temp: '',
        name: '',
        location: ''
    };

    api = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5',
        params: {
            appid: 'b6907d289e10d714a6e88b30761fae22'
        }
    });

    componentDidMount() {
        // getCurrentPosition 함수로 사용자의 현재 위치 파악
        navigator.geolocation.getCurrentPosition(position => {
            // api 추가 파라미터로 latitude, longitude 추가
            const getWeather = this.api.get('/weather',
                {
                            params: {
                                lat: position.coords.latitude,
                                lon: position.coords.longitude
                            },
                    },
                    err => console.log(err)
                );
            getWeather
                .then(res => {
                    this.setState({
                        temp: Math.ceil(res.data.main.temp - 273.15),
                        name: res.data.weather[0].main,
                        location: res.data.name
                    });
                })
                .catch(err => console.log(err));
        });
    }

    render() {
        const { location, name, temp } = this.state;
        return (
            <WeatherPresenter
                location={location}
                name={name}
                temp={temp}
            />
        );
    }
}

export default WeatherContainer;