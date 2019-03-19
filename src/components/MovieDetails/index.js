import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMovie, loadCredits } from './../../ac'
import { getImg, separateByCommas, getYear, formatNumber } from '../../helpers'
import Stars from './../../components/Stars'
import Cast from './../../components/Cast'
import Backdrops from './../../components/Backdrops'

class MovieDetails extends Component {
    static propTypes = {
        id: PropTypes.string,
        loadMovie: PropTypes.func,
        loadCredits: PropTypes.func,
        movie: PropTypes.object
    }

    render() {
        const { movie, credits } = this.props

        return <div className='movie-details'>
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
                    <Cast cast={ credits.cast }/>
                    <Backdrops images={ movie.images }/>
                </div>
    }

    componentDidMount() {
        this.props.loadMovie(this.props.id)
        this.props.loadCredits(this.props.id)
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

        return data.map((el, index) => {
            if (!el.val) return null

            return <tr key={ el.key + index }>
                <td>{ el.key }</td>
                <td>{ el.val }</td>
            </tr>
        })

    }

    renderHomeLink = (url) => {
        if (!url) return null

        return <a
            href={ url }
            className='movie-details__link'
            target='_blank'
            rel='noopener noreferrer'>
            homepage
        </a>
    }
}

export default connect(state => ({
    movie: state.movies.movie,
    credits: state.movies.credits
}), {
    loadMovie,
    loadCredits
})(MovieDetails)
