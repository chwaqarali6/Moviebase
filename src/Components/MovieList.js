import React from 'react'
import MovieCard from './MovieCard' 

export default function MovieList (props) {
    if(props.Searched && props.ResultMovies)
    {
        return (
            <div className="SearchResults row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
                {props.ResultMovies && props.ResultMovies.length && props.ResultMovies.map((item, index) => {
                    return (
                        <MovieCard key={index} MovieInfo = {{
                            ID: item.imdbID,
                            Poster: item.Poster,
                            Title: item.Title,
                            Year: item.Year,
                            ShowDetails: props.ShowMovieDetails
                        }} />
                    )
                })}
            </div>
        ) 
    }   
    else if(props.Searched)
    {
        return (
            <div className="ResultError">Results Not Found</div>
        )
    }
    return null
}