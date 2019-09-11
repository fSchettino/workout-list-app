import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ExercisesCnt from '../../pages/Exercises.cnt'
import ExerciseNewCnt from '../../pages/ExerciseNew.cnt'
import HooksExample from '../../pages/HooksExample'
import NotFound from '../errors/NotFound'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ExercisesCnt} />
                <Route exact path="/exercises" component={ExercisesCnt} />
                <Route exact path="/exercise/new" component={ExerciseNewCnt} />
                <Route exact path="/hooks" component={HooksExample} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App