import React from 'react'
import './Welcome.css'

// Componente funcional declarado con función flecha
const Welcome = ({firstName, lastName}) => {
    return(
        <div className="container">
           <div className="Fitness-User-Info">
               <h1>Hello { firstName + " " + lastName }!</h1>
               <p>Let's workout to get someone gains!</p>
           </div>
        </div>
    )
}

// Componente funcional declarado con función convencional

// function Welcome(props) {
//     const { firstName, lastName } = props
//      return(
//          <div className="container">
//             <div className="Fitness-User-Info">
//                 <h1>Hello { firstName + " " + lastName }!</h1>
//                 <p>Let's workout to get someone gains!</p>
//             </div>
//          </div>
//      )
// }

export default Welcome