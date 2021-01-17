import React from 'react'
// import MovieCard from './MovieCard'
import MovieList from './MovieList' 

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
    componentDidMount () {
        if(this.state.SearchTyped!=="")
        {
          this.handleSubmit()   
        }
    }

    handleSubmit () {
        // if(this.state.SearchTyped!=="")
        // {
            fetch("https://www.omdbapi.com/?apikey=c9f058e1&s="+this.state.SearchTyped)
                .then(response => response.json())
                .then(Result => {
                    console.log(Result)
                    this.setState({
                        ResultMovies: Result.Search,
                        ShowMovieDetails: false,
                        Searched: true
                    })
                })
        // }
    }

    render () {
        let SearchBox = ["hero-image hero-height"]
        if(this.state.Searched) {
            SearchBox.push('Searched')
        }
        return (
            <div>
                <div className={SearchBox.join(' ')}>
                    <div className="hero-overly">
                        <div className="row Search col-xl-7 col-lg-7">
                            <input className="SearchBar" type="text" name="SearchTyped" placeholder="Enter Movie Title" onChange={this.SearchHandle} />
                            <button className="SearchButton" type="submit" onClick = {this.handleSubmit}> Search </button>
                        </div>
                    </div>
                </div>
                <MovieList Searched={this.state.Searched} ResultMovies={this.state.ResultMovies} ShowMovieDetails={this.state.ShowMovieDetails} />
            </div>  
        )
    }
}