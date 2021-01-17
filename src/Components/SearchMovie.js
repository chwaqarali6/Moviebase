import React from 'react'
import MovieCard from './MovieCard' 

export default class SearchMovie extends React.Component {
    constructor () {
        super()
        this.state = {
            SearchTyped: "",
            ResultMovies: {},
            Searched: false,
        }
        this.SearchHandle = this.SearchHandle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    SearchHandle(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit () {
        fetch("http://www.omdbapi.com/?apikey=c9f058e1&s="+this.state.SearchTyped)
        .then(response => response.json())
        .then(Result => {
            console.log(Result)
            this.setState({
                ResultMovies: Result.Search,
                ShowMovieDetails: false,
                Searched: true
            })
        })
    }

    render () {
        let SearchBox = ["hero-image hero-height"];
        if(this.state.Searched) {
            SearchBox.push('Searched');
        }
        return (
            <div>
                <div className={SearchBox.join(' ')}>
                    <div className="hero-overly">
                        <div className="row Search col-xl-7 col-lg-7">
                            <input className="SearchBar" type="text" name="SearchTyped" placeholder="Enter Movie Title" onChange={this.SearchHandle} />
                            <button className="SearchButton" type="submit" onClick = {this.handleSubmit}> Submit </button>
                        </div>
                    </div>
                </div>
                <div className="SearchResults row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
                    {this.state.ResultMovies && this.state.ResultMovies.length && this.state.ResultMovies.map((item, index) => {
                        return (
                            <MovieCard key={index} MovieInfo = {{
                                ID: item.imdbID,
                                Poster: item.Poster,
                                Title: item.Title,
                                Year: item.Year,
                                ShowDetails: this.state.ShowMovieDetails
                            }} />
                        )
                    })}
                </div>
            </div>  
        )
    }
}