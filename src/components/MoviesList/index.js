import React, { Component } from 'react'
import Movie from './../../components/Movie'
import { urlPopular, urlGenreList } from './../../configPaths'

export default class MoviesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            genres: []
        }
    }

    componentDidMount() {
        fetch(urlPopular)
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.results
            }))

        fetch(urlGenreList)
            .then(response => response.json())
            .then(data => this.setState({
                genres: data.genres
            }))
    }

    render() {
        const movieItems = this.state.movies.map(movie => {
            return <div
                    key={movie.id}
                    className='movies-list__item'>
                        <Movie
                            movie={ movie }
                            genres={ this.state.genres }/>
                    </div>
        })

        return (
            <div className='movies-list'>
                { movieItems }
            </div>
        )
    }
}
