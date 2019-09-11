import React from 'react'
import useFetch from '../hooks/useFetch' // Importa hook personalizado
//import MockupData from '../mockupData/data.json'
import Loader from '../components/loader/Loader'
import FatalError from '../components/errors/FatalError'
import Exercises from './Exercises'
import apiUrl from '../config'

// Using useState and use Effect hooks
const ExercisesCnt = () => {

    const { data, loading, error } = useFetch(`${apiUrl}/exercises`)

    if (loading)
        return <Loader />
        
    if (error)
        return <FatalError />

    return <Exercises
                data={data}
            />
}

// class ExercisesCnt extends React.Component {

//     state = {
//             //data: MockupData
//             data:[],
//             loading: true,
//             error: null
//             }
    
//     async componentDidMount() {
//         await this.fetchExercises()
//     }

//     fetchExercises = async () => {
//         try {
//             let response = await fetch('http://localhost:8000/api/exercises')
//             let data = await response.json()

//             this.setState({
//                 data,
//                 loading: false
//             })
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error
//             })
//         }
//     }

//     render() {
//         if (this.state.loading)
//             return <Loader />
        
//         if (this.state.error)
//             return <FatalError />

//         return <Exercises
//                     data={this.state.data}
//                 />
//     }
// }

export default ExercisesCnt