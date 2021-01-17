import React from 'react'
import { Link } from "react-router-dom"
import Back from '../Assets/img/icons/back.png'
import PosterNotFound from "../Assets/img/poster.png"
import Runtime from '../Assets/img/icons/runtime.png'
import Votes from '../Assets/img/icons/votes.png'
import Rating from '../Assets/img/icons/rating.png' 
import Released from '../Assets/img/icons/released.png'

export default class MovieDetails extends React.Component {
    constructor () {
        super()
        this.state = {
            MovieInformation: {}
        }
    }
    componentDidMount() {
        const { MovieID } = this.props.match.params
        console.log(MovieID)
        fetch("https://www.omdbapi.com/?apikey=c9f058e1&plot=full&i="+MovieID)
        .then(response => response.json())
        .then(Result => {
            console.log(Result)
            this.setState({
                MovieInformation: Result
            })
        })
    }

    render () {
        let PosterLink = this.state.MovieInformation.Poster
        if(PosterLink==='N/A') {
            PosterLink = PosterNotFound
        }
        return (
            <div className="container Details">
                <div className="row mb-50">
                    <Link to={`/`}><img className="GoBack" src={Back} alt=""/></Link>
                </div>
                <div className="row mb-50">
                    <div className="col-xs-10 col-sm-6 col-lg-3">
                        <img className="Poster" src={PosterLink} alt=""/>
                    </div>
                    <div className="Overview col-xs-10 col-sm-14 col-md-7 col-lg-8 col-lg-offset-1">
                        <h1 className="Title">{this.state.MovieInformation.Title}</h1>
                        <div className="OverviewInfo">
                            <h2>{this.state.MovieInformation.Year}</h2>
                            <h2>{this.state.MovieInformation.Genre}</h2>
                            <h2>{this.state.MovieInformation.Language}</h2>
                        </div>
                        <div>
                            <span className="DetailIconsInfo"><img className="DetailIcons" src={Rating} alt="imdbRating"/></span>
                            <span>{this.state.MovieInformation.imdbRating}</span>
                            <br/>
                            <span className="DetailIconsInfo"><img className="DetailIcons" src={Votes} alt="Votes"/></span>
                            <span>{this.state.MovieInformation.imdbVotes}</span>
                            <br/>
                            <span className="DetailIconsInfo"><img className="DetailIcons" src={Runtime} alt="Runtime"/></span>
                            <span>{this.state.MovieInformation.Runtime}</span>
                            <br/>
                            <span className="DetailIconsInfo"><img className="DetailIcons" src={Released} alt="Released"/></span>
                            <span>{this.state.MovieInformation.Released}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="DetailHeading">Sypnosis</div>
                        <div className="Plot">{this.state.MovieInformation.Plot}</div>
                        <br/>
                        <div ><span className="InlineHeading">BoxOffice:</span> {this.state.MovieInformation.BoxOffice}</div>
                        <br/>
                        <div ><span className="InlineHeading">Awards:</span> {this.state.MovieInformation.Awards}</div>
                        <br/>
                        <div ><span className="InlineHeading">Rated:</span> {this.state.MovieInformation.Rated}</div>
                        
                    </div>
                    <div className="col-lg-4"> 
                        <div className="DetailHeading">Director</div>
                        <div className="Plot">{this.state.MovieInformation.Director}</div>
                        <hr className="Divider" />

                        <div className="DetailHeading">Cast</div>
                        <div className="Plot">{this.state.MovieInformation.Actors}</div>
                        <hr className="Divider" />

                        <div className="DetailHeading">Writer</div>
                        <div className="Plot">{this.state.MovieInformation.Writer} </div>
                        <hr className="Divider" />

                        <div className="DetailHeading">Production</div>
                        <div className="Plot">{this.state.MovieInformation.Production} </div>
                        <hr className="Divider" />

                    </div>
                </div>
            </div>
        )
    }
}