import React, { Component } from 'react'
import Movie from './../Movie'
import PropTypes from 'prop-types'

export default class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired,
        genres: PropTypes.array.isRequired
    }

    render() {
        const { movies, genres } = this.props

        const items = movies.map(movie => {
            return <div
                key={movie.id}
                className='movies-list__item'>
                <Movie
                    movie={ movie }
                    genres={ genres }/>
            </div>
        })

        return (
            <div className='movies-list'>{ items }</div>
        )
    }
}
