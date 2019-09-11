import React from 'react'
import {Link} from 'react-router-dom'
import './Errors.css'
import NotFoundImg from './images/404.png'

const NotFound = () => {
    return (
        <div className="text-center">
            <h1 className="Error_Text">Error: 404 Page not found</h1>
            <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
            <br />
            <br />
            <Link to="/exercises">
                <p>Back to exercise list</p>
            </Link>
        </div>
    )
}

export default NotFound