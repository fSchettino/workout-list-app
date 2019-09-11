import React from 'react'
import { Link } from 'react-router-dom'

import './AddExerciseButton.css'
import btnBackground from './Images/add.png'

const AddExerciseButton = () => {
    return(
        <Link to="/exercise/new">
            <img src={ btnBackground } alt="Add exercise" className="Fitness-Add" />
        </Link>
    )
}

export default AddExerciseButton