import React from 'react'
import Welcome from '../components/welcome/Welcome'
import ExerciseList from '../components/exerciceList/ExerciseList' 
import AddExerciseButton from '../components/addExerciseButton/AddExerciseButton'

const Exercises = ({ data }) => {
    return (
        <React.Fragment>
            <Welcome
                firstName="Fabio"
                lastName="Schettino"
            />
            <ExerciseList
                exercises={data}
            />
            <AddExerciseButton />
        </React.Fragment>
    )
}

export default Exercises