import React, {Component} from "react";

var FontAwesome = require('react-fontawesome');

class MovieDetails extends Component {

    state = {
        highlighted: -1
    }

    highlightRate = high => evt => {
        this.setState({highlighted: high});
    }

    rateClicked = stars => evt => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Token 4eed582f90993b006f81f041311f2bd97976e79e'
            },
            body: JSON.stringify({
                stars: stars + 1
            })
        }).then(resp => resp.json()).then(res => this.getDetails())
            .catch(error => console.log(error))
    }

    getDetails = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Token 4eed582f90993b006f81f041311f2bd97976e79e'
            },
        }).then(resp => resp.json()).then(res => this.props.updateMovie(res))
            .catch(error => console.log(error))
    }

    render() {
        const mov = this.props.movie;

        return (
            <React.Fragment>
                {mov ? (
                    <div>
                        <h3>{mov.name}</h3>
                        <p>{mov.description}</p>
                        <FontAwesome name="star" className={mov.avg_rating > 0 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 1 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 2 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 3 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 4 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 5 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 6 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 7 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 8 ? 'orange' : ''}/>
                        <FontAwesome name="star" className={mov.avg_rating > 9 ? 'orange' : ''}/>
                        ({mov.num_of_ratings})

                        <div className="rate-container">
                            <h2>Rate it </h2>
                            {
                                [...Array(10)].map((e, i) => {
                                    return <FontAwesome key={i} name="star"
                                                        className={this.state.highlighted > i - 1 ? "purple" : ''}
                                                        onMouseEnter={this.highlightRate(i)}
                                                        onMouseLeave={this.highlightRate(-1)}
                                                        onClick={this.rateClicked(i)}/>
                                })
                            }
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        )
    }
}

export default MovieDetails;