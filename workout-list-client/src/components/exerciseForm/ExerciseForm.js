import React from 'react'

class ExerciseForm extends React.Component {

    // // Manejo del evento click
    // constructor(props){
    //     super(props)

    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick() {
    //     console.log(this)
    // }

    // // Manejo del evento click con public class fields
    // handleClick = () => {
    //     console.log('Clicked')
    // }

    // render() {
    //     return (
    //         <button onClick={this.handleClick}>
    //             Confirm
    //         </button>
    //     )
    // }

    //Inicializamos el objeto que contendrá el estado de los elementos del formulario
    //state = {}

    render() {

        const { onChange, onSubmit, form } = this.props

        return(
            <div className="container">
                <form
                    onSubmit={ onSubmit }
                >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            onChange={ onChange }
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            onChange={ onChange }
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Image"
                            name="img"
                            onChange={ onChange }
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Left color"
                                name="leftColor"
                                onChange={ onChange }
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Right color"
                                name="rightColor"
                                onChange={ onChange }
                                value={form.rightColor}
                            />
                        </div>
                    </div>
                    <br></br>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ExerciseForm