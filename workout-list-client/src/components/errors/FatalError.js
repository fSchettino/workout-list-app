import React from 'react'
import './Errors.css'
import FatalErrorImg from './images/500.png'

const FatalError = () => {
    return (
        <div className="text-center">
            <h1 className="Error_Text">Error: 500 Unexpected error</h1>
            <img src={FatalErrorImg} alt="500 Unexpected error" className="Error_Image" />
        </div>
    )
}

export default FatalError