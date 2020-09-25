import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
        { exercises.map((exercise) => {
            return(
                <Card 
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                />
            )
        })}
    </div>
)

/*
function ExerciceList(props){
    return(
        <div>
            { props.exercices.map((exercice) => {
                return(
                    <Card 
                        title={exercice.title}
                        description={exercice.description}
                        img={exercice.img}
                        leftColor={exercice.leftColor}
                        rightColor={exercice.rightColor}
                    />
                )
            })}
        </div>
    )
}
*/

export default ExerciseList