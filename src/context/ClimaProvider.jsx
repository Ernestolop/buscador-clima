import axios from 'axios';
import { useState } from 'react';
import {createContext} from 'react'


const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(false);

    const obtenerClima = async datos => { 
        try {
            setError(false)
            setCargando(true)
            const {ciudad, pais} = datos;
            const key = import.meta.env.VITE_API_KEY;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`
            const {data} = await axios(url);
            const {lat, lon} = data[0];
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
            const {data:clima} = await axios(urlClima);
            setResultado(clima);
            setCargando(false)
        } catch (error) {
            console.log(error);
            setCargando(false)
            setError(true);
        };
    };

  return (
    <ClimaContext.Provider
    value={{
        obtenerClima,
        resultado,
        cargando,
        error
    }}
    >
        {children}
    </ClimaContext.Provider>
  );
};

export default ClimaContext;
export {ClimaProvider};
