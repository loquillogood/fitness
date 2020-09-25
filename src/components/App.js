import React from 'react'
import Exercises from '../pages/Exercises'
import ExerciseNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path= "/exercises" component={Exercises}></Route>
            <Route exact path= "/exercise/new" component={ExerciseNew}></Route>
            {/*<Route exact path= "/" component={Exercices}></Route>*/}
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)
/*
function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path= "/exercise" component={Exercices}></Route>
                <Route exact path= "/exercise/new" component={ExercicesNew}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}
*/

export default App