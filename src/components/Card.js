import React from 'react'
import circlesImg from '../images/circles.png'
import './styles/Card.css'


class Cards extends React.Component {
    /*
    constructor(props){
        super(props)
        //Estado inicial del componente
        this.state= {
            image: `${exerciseImg}`            
        }
    }

    //Función que se ejecuta después que un componente de monta
    componentDidMount(){
        setTimeout(()=> {
            this.setState({
                image: `${gokuImg}`
            })
        },3000)
    }
    */

    render(){
        const {title, description, img, leftColor, rightColor} = this.props
        return (
            //En javascript las clases se define con la palabra reservada class, por lo que la clase que se
            //utilice para CSS, debera ser con className
            <div className="card mx-auto Fitness-Card"
                //estilos en línea
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor}`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            {/*<img src={this.state.image} alt="Ejercicio" className="float-right"/>*/}
                            <img src={img} alt="Ejercicio" className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards