import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMovie } from './../../ac'
import { getImg, formatGenres, getYear } from '../../helpers'
import Stars from './../../components/Stars'

class MovieDetails extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        loadMovie: PropTypes.func.isRequired,
        movie: PropTypes.object
    }

    render() {
        const { movie } = this.props

        return <div className='movie-details'>
            <div className='movie-details__parts'>
                <div className='movie-details__const'>
                    <img src={ getImg(movie.poster_path) } alt=""/>
                </div>
                <div className='movie-details__var'>
                    <h1>{movie.title }</h1>
                    <Stars
                        evaluation={ movie.vote_average }
                        count={ movie.vote_count }/>
                    <table className='movie-details__props'>
                        <tbody>
                            <tr>
                                <td>Genre:</td>
                                <td>{ formatGenres(movie.genres) }</td>
                            </tr>
                            <tr>
                                <td>Runtime:</td>
                                <td>{ movie.runtime } min</td>
                            </tr>
                            <tr>
                                <td>Original language:</td>
                                <td>{ movie.original_language }</td>
                            </tr>
                            <tr>
                                <td>Release year:</td>
                                <td>{ getYear(movie.release_date) }</td>
                            </tr>
                            <tr>
                                <td>Budget:</td>
                                <td>${ movie.budget }</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>{ movie.overview }</p>
                    <a
                        href={ movie.homepage }
                        className='movie-details__link'
                        target='_blank'
                        rel='noopener noreferrer'>
                        homepage
                    </a>
                </div>
            </div>
            <div className='movie-details__gallery u-scrollbar-x'>
                { this.renderImages(movie.images) }
            </div>
        </div>
    }

    componentDidMount() {
        this.props.loadMovie(this.props.id)
    }

    renderImages = images => {
        if (images) {
            return images.backdrops.map(el => {
                return <img key={el.file_path} src={ getImg(el.file_path) } alt=''/>
            })
        }
    }
}

export default connect(state => ({
    movie: state.movies.movie
}), { loadMovie })(MovieDetails)
