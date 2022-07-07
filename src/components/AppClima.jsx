import Formulario from "./Formulario"
import useClima from '../hooks/useClima'
import Resultado from "./Resultado";
import Spinner from "./Spinner";
import Error from "./Error";


const AppClima = () => {

    const {resultado, cargando, error} = useClima();

  return (
    <>
        <header>
            <h1>Buscador de clima</h1>
        </header>
        <main className="dos-columnas">
            <div className="contenedor">
                <Formulario/>
            </div>
            <div className="contenedor">
                {
                    cargando ? <Spinner/> :
                    error ? <Error>Hubo un error</Error> :
                    resultado?.name ? <Resultado/> :
                    <p className="text-center">El resultado se mostrará aquí</p>
                }
            </div>
        </main>
    </>
  )
}

export default AppClima