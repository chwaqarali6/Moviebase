import React from 'react'
import { Link } from "react-router-dom"
import MovieList from './MovieList' 

export default class SearchMovie extends React.Component {
    constructor () {
        super()
        this.state = {
            SearchTyped: "",
            ResultMovies: {},
            Searched: false,
            NumberOfPages: 1,
            CurrentPage: 1
        }
        this.SearchHandle = this.SearchHandle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.PreviousPage = this.PreviousPage.bind(this)
        this.NextPage = this.NextPage.bind(this)
    }

    SearchHandle(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount()
    {
        const { Query } = this.props.match.params
        if(Query!==undefined)
        {
            this.setState({
                SearchTyped: Query
            },() => {
                this.handleSubmit()
            })
        }
        
    }

    handleSubmit () {
        if(this.state.SearchTyped!=="")
        {
            fetch("https://www.omdbapi.com/?apikey=c9f058e1&s="+this.state.SearchTyped)
                .then(response => response.json())
                .then(Result => {
                    this.setState({
                        Searched: true,
                        ResultMovies: Result.Search,
                        NumberOfPages: ~~(Result.totalResults/10+1),
                        CurrentPage: 1
                    })
                })
        }
    }

    PreviousPage () {
        if(this.state.CurrentPage>1)
        {
            this.setState(prevState => { return {
                CurrentPage: prevState.CurrentPage - 1
            }},() => {
                fetch("https://www.omdbapi.com/?apikey=c9f058e1&s="+this.state.SearchTyped+"&page="+this.state.CurrentPage)
                .then(response => response.json())
                .then(Result => {
                    console.log(Result)
                    this.setState({
                        ResultMovies: Result.Search
                    })
                })
            })
            
        }
    }
    NextPage () {
        if(this.state.CurrentPage<this.state.NumberOfPages)
        {
            this.setState(prevState => { return {
                CurrentPage: prevState.CurrentPage + 1
            }},() => {
                fetch("https://www.omdbapi.com/?apikey=c9f058e1&s="+this.state.SearchTyped+"&page="+this.state.CurrentPage)
                .then(response => response.json())
                .then(Result => {
                    console.log(Result)
                    this.setState({
                        ResultMovies: Result.Search
                    })
                })
            })
        }
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
                            <Link className="SearchButton" onClick = {this.handleSubmit} to={`/${this.state.SearchTyped}`}>
                                Search
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <MovieList  StatesCondition = {{
                    SearchTyped: this.state.SearchTyped,
                    Searched: this.state.Searched,
                    ResultMovies: this.state.ResultMovies,
                    CurrentPage: this.state.CurrentPage,
                    NumberOfPages: this.state.NumberOfPages,
                    PreviousPage: this.PreviousPage,
                    NextPage: this.NextPage
                }} />
            </div>  
        )
    }
}