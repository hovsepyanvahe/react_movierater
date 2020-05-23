import React, {Component} from 'react';
import './App.css';
import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";

class App extends Component {
    state = {
        movies: [],
        selectedMovie: null
    }

    componentDidMount = () => {
        fetch('http://127.0.0.1:8000/api/movies/', {
            method: 'GET',
            headers: {
                'Authorization': 'Token 4eed582f90993b006f81f041311f2bd97976e79e'
            }
        }).then(resp => resp.json()).then(res => this.setState({movies: res}))
            .catch(error => console.log(error))
    }

    movieClicked = movie => {
        this.setState({selectedMovie: movie})
    }

    render() {
        return (
            <div className="App">
                <h1>Movie Rater</h1>
                <div className="layout">
                    <MovieList movies={this.state.movies} movieClicked={this.movieClicked}/>
                    <MovieDetails movie={this.state.selectedMovie}/>
                </div>

            </div>
        );
    }

}

export default App;
