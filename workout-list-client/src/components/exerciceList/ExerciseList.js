import React from 'react'
import Card from '../card/Card'

const ExerciseList = ({exercises}) => {
    return(
        <React.Fragment>
        {
            exercises.map((exercise) => {
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
            })
        }
        </React.Fragment>
    )
}

export default ExerciseList