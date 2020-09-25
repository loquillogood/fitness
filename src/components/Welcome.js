import React from 'react'
import './styles/Card.css'

const Welcome= ({username}) => (
    <div className="container">
        <div className="Fitness-User_Info">
            <h1>Hola {username}!</h1>
            <p>Trabajemos para obtener algunos puntos!</p>
        </div>
    </div>
)

/*
//Componentes funcionales, no se necesita estar revisando las props o el estado del componente
function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User_Info">
                <h1>Hola {props.username}!</h1>
                <p>Trabajemos para obtener algunos puntos!</p>
            </div>
        </div>
    )
}
*/

export default Welcome