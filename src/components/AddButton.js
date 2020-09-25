import React from 'react'
import {Link} from 'react-router-dom'
import ButtonImg from '../images/add.png'

const AddButton= () => (
    <Link to="exercise/new">
        <img src={ButtonImg} className="Fitness-Add" alt="exercice"/>
    </Link>
)

/*
function AddButton(){
    return (
        <Link to="exercice/new">
            <img src={ButtonImg} className="Fitness-Add" alt="exercice"/>
        </Link>
    )
}
*/

export default AddButton