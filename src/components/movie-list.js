import React from "react";

const MovieList = (props) => {
    const movieClicked = movie => evt => {
        props.movieClicked(movie);
    }

    return (
        <div>
            {props.movies.map(movie =>
                <h3 key={movie.id} className="pointer" onClick={movieClicked(movie)}>{movie.name}</h3>
            )}
        </div>
    )
}

export default MovieList;