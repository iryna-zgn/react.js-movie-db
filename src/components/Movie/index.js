import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stars from './../../components/Stars'
import { Link } from 'react-router-dom'
import { getImg, formatGenres, getYear } from '../../helpers'

export default class Movie extends Component {
    static propTypes = {
        movie: PropTypes.shape({
            poster_path: PropTypes.string,
            title: PropTypes.string,
            genre_ids: PropTypes.array,
            release_date: PropTypes.string,
            overview: PropTypes.string
        }),
        genres: PropTypes.array
    }

    render() {
        const { movie } = this.props

        return (
            <div className='movie'>
                <Link to={`/movie-${movie.id}`}
                    className='movie__img'
                    style={{ backgroundImage: `url(${getImg(movie.poster_path)})` }}>
                    <img src='static/images/dummy_420x630.jpg' alt='' className='u-dummy'/>
                </Link>
                <div>
                    <Link to={`/movie-${movie.id}`}
                          className='movie__title t2'>
                        { movie.title }
                    </Link>
                    <div className='movie__prop'>
                        { this.renderGenres(movie.genre_ids) }
                    </div>
                    <div className='movie__prop'>
                        { getYear(movie.release_date) }
                    </div>
                    <Stars
                        evaluation={ movie.vote_average }
                        count={ movie.vote_count }/>
                    <div
                        className='movie__desc'
                        style={{ WebkitBoxOrient: 'vertical' }}>
                        { movie.overview }
                    </div>
                    <Link to={`/movie-${movie.id}`}
                          className='movie__link'>
                        Read more
                    </Link>
                </div>
            </div>
        )
    }

    getGenres = ids => {
        const { genres } = this.props
        const currentGenres = new Set()

        ids.forEach(id => {
            genres.forEach(genre => {
                if (genre.id === id) {
                    currentGenres.add(genre)
                }
            })
        })

        return [...currentGenres]
    }

    renderGenres = ids => formatGenres(this.getGenres(ids))
}
