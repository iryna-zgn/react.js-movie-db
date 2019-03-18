import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stars from './../../components/Stars'
import { URL_IMG } from '../../paths'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadGenres } from './../../ac'

class Movie extends Component {
    static propTypes = {
        movie: PropTypes.shape({
            poster_path: PropTypes.string,
            title: PropTypes.string,
            genre_ids: PropTypes.array,
            release_date: PropTypes.string,
            overview: PropTypes.string,
            loadGenres: PropTypes.func,
        }),
        genres: PropTypes.array
    }

    render() {
        const { movie } = this.props

        return (
            <div className='movie'>
                <Link to={`/movie-${movie.id}`}
                    className='movie__img'
                    style={{ backgroundImage: `url(${this.getImg(movie.poster_path)})` }}>
                    <img src='static/images/dummy_420x630.jpg' alt='' className='u-dummy'/>
                </Link>
                <div>
                    <Link to={`/movie-${movie.id}`}
                          className='movie__title t2'>
                        { movie.title }
                    </Link>
                    <div className='movie__prop'>{ this.renderGenres(movie.genre_ids) }</div>
                    <div className='movie__prop'>{ this.getYear(movie.release_date) }</div>
                    <div className='movie__evaluate'>
                        <div className='movie__stars'>
                            <Stars count={ this.getStarCount(movie.vote_average) }/>
                        </div>
                        <div>{ movie.vote_count }</div>
                    </div>
                    <div className='movie__desc'>{ movie.overview }</div>
                    <Link to={`/movie-${movie.id}`}
                          className='movie__link'>
                        Read more
                    </Link>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.loadGenres()
    }

    getYear = date => date.slice(0, 4)

    getImg = img => img ? `${URL_IMG}${img}` : 'static/images/rho_light.jpg'

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

    getStarCount = vote => Math.round(vote / 2)

    renderGenres = ids => {
        return this.getGenres(ids).map((genre, index) => {
            return <span key={ genre.id }>
                        { (index ? `, ${genre.name.toLowerCase()}` : genre.name) }
                    </span>
        })
    }
}


export default connect(null, { loadGenres })(Movie)
