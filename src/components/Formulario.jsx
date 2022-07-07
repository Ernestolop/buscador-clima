import { useState } from 'react'
import Error from './Error'
import useClima from '../hooks/useClima'
const Formulario = () => {

    const {obtenerClima} = useClima();

    const [datos, setDatos] = useState({
        ciudad: '',
        pais: ''
    });

    const [error, setError] = useState(false);

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(datos).includes('')) {
            setError(true);
            return;
        }
        setError(false);
        obtenerClima(datos);
    };

  return (
    <form
    onSubmit={handleSubmit}
    >
        <div className="campo">
            <label htmlFor="ciudad">Ciudad</label>
            <input type="text" name='ciudad' id='ciudad' placeholder='Escribe la ciudad' required
            onChange={e => handleChange(e)}
            value={datos.ciudad}
            />
        </div>
        <div className="campo">
            <label htmlFor="pais">Pais</label>
            <select name="pais" id="pais" required
            onChange={e => handleChange(e)}
            value={datos.pais}
            >
                <option value="">--Seleccione el pais--</option>
                <option value="PY">Paraguay</option>
                <option value="AR">Argentina</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">Mexico</option>
                <option value="CO">Colombia</option>
                <option value="ES">España</option>
            </select>
        </div>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <input type="submit" value="Consultar Clima" />
    </form>
  )
}

export default Formulario