import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { urlImg } from './../../configPaths'

export default class Movie extends Component {
    static propTypes = {
        movie: PropTypes.shape({
            poster_path: PropTypes.string,
            title: PropTypes.string,
            genre_ids: PropTypes.array.isRequired,
            release_date: PropTypes.string.isRequired,
            overview: PropTypes.string
        }),
        genres: PropTypes.array.isRequired
    }

    getYear = date => date.slice(0, 4)

    getImg = img => img ? `${urlImg}${img}` : 'static/images/rho_light.jpg'

    getGenres = (ids) => {
        const { genres } = this.props
        const currentGenres = []

        ids.forEach(id => {
            genres.forEach(genre => {
                if (genre.id === id) {
                    currentGenres.push(genre)
                }
            })
        })

        return currentGenres
    }

    renderGenres = (ids) => {
        return this.getGenres(ids).map((genre, index) => {
            return <span key={ genre.id }>
                        { (index ? `, ${genre.name.toLowerCase()}` : genre.name) }
                    </span>
        })
    }

    render() {
        const { movie } = this.props

        return (
            <div className='movie'>
                <div
                    className='movie__img'
                    style={{ backgroundImage: `url(${this.getImg(movie.poster_path)})` }}>
                    <img src='static/images/dummy_420x630.jpg' alt='' className='u-dummy'/>
                </div>
                <div>
                    <h2 className='movie__title'>{ movie.title }</h2>
                    <div className='movie__prop'>{ this.renderGenres(movie.genre_ids) }</div>
                    <div className='movie__prop'>{ this.getYear(movie.release_date) }</div>
                    <div className='movie__desc'>{ movie.overview }</div>
                    <div className='movie__link'>Read more</div>
                </div>
            </div>
        )
    }
}
