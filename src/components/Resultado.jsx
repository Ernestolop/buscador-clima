import React from 'react'
import useClima from '../hooks/useClima'

const Resultado = () => {

    const {resultado} = useClima();
    const {name, main} = resultado;

    const kelvin = 273;


  return (
    <>
        <h2 className='text-center'>La temperatura en {name} es de: </h2>
        <p className='text-center temp-act'>{parseInt(main.temp - kelvin)}<span>&#x2103;</span></p>
        <p className='text-center'>Temperatura Mínima : {parseInt(main.temp_min - kelvin)}<span>&#x2103;</span></p>
        <p className='text-center'>Temperatura Máxima : {parseInt(main.temp_max - kelvin)}<span>&#x2103;</span></p>
    </>
  )
}

export default Resultado