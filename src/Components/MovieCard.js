import React from 'react'
import { Link } from "react-router-dom"
import PosterNotFound from "../Assets/img/poster.png"

export default class MovieCard extends React.Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit () {
        this.props.MovieInfo.ShowDetails = this.props.MovieInfo.ID
    }
    
    render () {
        let PosterLink = this.props.MovieInfo.Poster
        if(PosterLink==='N/A') {
            PosterLink = PosterNotFound
        }
        return (
            <div className="col">
                <figure>
                    <img className="Poster" src={PosterLink} alt=""/>
                    <figcaption className="FigureCaption">
                        <Link to={`/${this.props.MovieInfo.Query}/${this.props.MovieInfo.ID}`}>
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