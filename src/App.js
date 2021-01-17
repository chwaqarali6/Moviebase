import React from 'react'
import SearchMovie from './Components/SearchMovie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';

export default class App extends React.Component {
    
    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={SearchMovie} />
                    <Route path="/Movie/:MovieID" exact component={MovieDetails} />
                </Switch>
            </Router>
        )
    }
}