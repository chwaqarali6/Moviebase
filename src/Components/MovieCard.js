import React from 'react'
import { Link } from "react-router-dom"

export default class MovieCard extends React.Component {
    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
s
    handleSubmit () {
        this.props.MovieInfo.ShowDetails = this.props.MovieInfo.ID
    }
    
    render () {
        return (
            <div className="col">
                <figure>
                    <img className="Poster" src={this.props.MovieInfo.Poster} alt=""/>
                    <figcaption>
                        <Link to={`/Movie/${this.props.MovieInfo.ID}`}>
                            <button className="ShowDetails">
                                View Details
                            </button>
                        </Link>
                    </figcaption>
                </figure>
                <div className="MovieInfo">
                    <h1 className="MovieTitle">{this.props.MovieInfo.Title}</h1>
                    <p className="MovieYear">{this.props.MovieInfo.Year}</p>
                </div>
            </div>
        )
    }
}