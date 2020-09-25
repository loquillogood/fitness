import React, {Component} from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import 'bootstrap/dist/css/bootstrap.css'



class ExerciseNew extends Component {
    state={
        form: {
            title: "",
            description: "",
            img: "",
            leftColor: "",
            rightColor: ""
        }
    }

    handleChange = e => {
        //console.log(`${e.target.name}: ${e.target.value}`)
        this.setState({
            form:  {
                ...this.state.form, //Destructuring: Mantenga lo que ya se tenía anteriormente, y si es nueva lo cambie
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange= {this.handleChange}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }
}

export default ExerciseNew