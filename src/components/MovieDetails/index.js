import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMovie } from './../../ac'
import { getImg, separateByCommas, getYear, formatNumber } from '../../helpers'
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
                    <img src={ getImg(movie.poster_path) } alt=''/>
                </div>
                <div className='movie-details__var'>
                    <h1>{movie.title }</h1>
                    <Stars
                        evaluation={ movie.vote_average }
                        count={ movie.vote_count }/>
                    <table className='movie-details__props'>
                        <tbody>
                            { this.renderTableRows(movie) }
                        </tbody>
                    </table>
                    <p>{ movie.overview }</p>
                    { this.renderHomeLink(movie.homepage) }
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

    renderTableRows = (movie) => {
        const data = [
            {
                key: 'Genre:',
                val: separateByCommas(movie.genres)
            },
            {
                key: 'Runtime:',
                val: `${movie.runtime} min`
            },
            {
                key: 'Original language:',
                val: movie.original_language
            },
            {
                key: 'Release year:',
                val: getYear(movie.release_date)
            },
            {
                key: 'Budget:',
                val: formatNumber(movie.budget, '$')
            },
        ]

        return data.map(el => {
            if (el.val) {
                return <tr>
                    <td>{ el.key }</td>
                    <td>{ el.val }</td>
                </tr>
            }
        })

    }

    renderHomeLink = (url) => {
        if (url) {
            return <a
                href={ url }
                className='movie-details__link'
                target='_blank'
                rel='noopener noreferrer'>
                homepage
            </a>
        }
    }
}

export default connect(state => ({
    movie: state.movies.movie
}), { loadMovie })(MovieDetails)
