import React from 'react'
import SearchMovie from './Components/SearchMovie'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';

export default class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={SearchMovie} />
                    <Route path="/:Query" exact component={SearchMovie} />
                    <Route path="/:Query/:MovieID" exact component={MovieDetails} />
                </Switch>
            </BrowserRouter>
        )
    }
}