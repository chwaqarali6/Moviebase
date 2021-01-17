import React from 'react'
import MovieCard from './MovieCard' 
import Previous from '../Assets/img/icons/back.png'
import Next from '../Assets/img/icons/next.png'

export default function MovieList (props) {
    if(props.StatesCondition.Searched && props.StatesCondition.ResultMovies)
    {
        return (
            <div>
                <div className="row no-margin PageShift">
                    <img className="RoundButton" onClick={props.StatesCondition.PreviousPage} src={Previous} alt="Previous Page"/>
                    <div className="PageIndicator"><h1>{props.StatesCondition.CurrentPage}/{props.StatesCondition.NumberOfPages}</h1></div>
                    <img className="RoundButton" onClick={props.StatesCondition.NextPage} src={Next} alt="Next Page"/>
                </div>
                <div className="SearchResults row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
                    {props.StatesCondition.ResultMovies && props.StatesCondition.ResultMovies.length && props.StatesCondition.ResultMovies.map((item, index) => {
                        return (
                            <MovieCard key={index} MovieInfo = {{
                                ID: item.imdbID,
                                Poster: item.Poster,
                                Title: item.Title,
                                Year: item.Year, 
                                Query: props.StatesCondition.SearchTyped
                            }} />
                        )
                    })}
                </div>
            </div>
            
        ) 
    }   
    else if(props.StatesCondition.Searched)
    {
        return (
            <div className="ResultError">Results Not Found</div>
        )
    }
    return null
}