import React from 'react'
import Loader from '../components/loader/Loader'
import FatalError from '../components/errors/FatalError'
import ExerciseNew from './ExerciseNew'
import apiUrl from '../config'

class ExerciseNewCnt extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null
    }

    handleChange = event => {
        //console.log(`${event.target.name}: ${event.target.value}`)
        // let partialState = {}
        // partialState[event.target.name] = event.target.value
        // this.setState(partialState)

        this.setState({
            form: {
                ...this.state.form, // Utiliza parametro Rest y permite enviar todos los atributos que en este caso tiene nuestro objeto form
                [event.target.name]: event.target.value
            }
        })
    }

    // Si solo hay un argunemto (en este caso "event") los parentesis se pueden omitir
    handleSubmit = async event => {
        this.setState({
            loading: true
        })

        event.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let response = await fetch(`${apiUrl}/exercises`, config)
            let json = await response.json() // Convierte la respuesta en un JSON
            console.log(json)

            this.setState({
                loading: false
            })

            //Redirecciona a la pagina con la lista de ejercicios tras haber guardado el nuevo exercicio
            this.props.history.push('/exercises')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })

        } 
    }

    render() {
        if (this.state.loading)
            return <Loader />

        if (this.state.error)
            return <FatalError />

        return  <ExerciseNew 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />            
    }
}

export default ExerciseNewCnt