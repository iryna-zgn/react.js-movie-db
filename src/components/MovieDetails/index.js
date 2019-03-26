import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getImg, separateByCommas, getYear, formatNumber, formatTime  } from '../../helpers'
import Stars from './../../components/Stars'
import Cast from './../../components/Cast'
import Backdrops from './../../components/Backdrops'
import { toggleModal } from './../../ac'
import { modals } from './../../constants'

class MovieDetails extends Component {
    static propTypes = {
        id: PropTypes.string,
        movie: PropTypes.object,
        credits: PropTypes.object
    }

    render() {
        const { movie, credits } = this.props

        return (
            <div className='movie-details'>
                <div className='movie-details__parts'>
                    <div className='movie-details__const'>
                        <div className='movie-details__poster'
                             onClick={() => this.showImg(movie.poster_path)}>
                            <img src={ getImg(movie.poster_path) } alt=''/>
                        </div>
                    </div>
                    <div className='movie-details__var'>
                        <h1>{movie.title }</h1>
                        <Stars
                            evaluation={ movie.vote_average }
                            count={ movie.vote_count }/>
                        <table className='movie-details__props'>
                            <tbody>
                              { this.renderRows(this.getDetails(movie)) }
                              { this.renderRows(this.getDataByName(movie.production_countries, 'Country')) }
                              { this.renderRows(this.getDataByName(movie.production_companies, 'Production')) }
                              { this.renderRows(this.getCrew(credits.crew)) }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='movie-details__desc'>
                    <p>{ movie.overview }</p>
                    { this.renderHomeLink(movie.homepage) }
                </div>
                { this.renderCast(credits.cast) }
                { this.renderBackdrops(movie.images) }
            </div>
        )
    }

    getDetails = data => {
        return [
            {
                key: 'Genre',
                val: separateByCommas(data.genres)
            },
            {
                key: 'Runtime',
                val: formatTime(data.runtime)
            },
            {
                key: 'Original language',
                val: data.original_language
            },
            {
                key: 'Release year',
                val: getYear(data.release_date)
            },
            {
                key: 'Budget',
                val: formatNumber(data.budget, '$')
            },
        ]

    }

    getCrew = (data=[]) => {
        const selectedPeople = {
            'Director': '',
            'Producer': '',
            'Screenplay': '',
            'Writer': '',
            'Music': '',
            'Original Music Composer': ''
        }

        data.forEach(el => {
            if (el.job in selectedPeople) {
                selectedPeople[el.job] += selectedPeople[el.job] ? `, ${el.name}` : el.name
            }
        })

        for (let person in selectedPeople) {
            selectedPeople[person] = {
                key: person,
                val: selectedPeople[person]
            }
        }

        return Object.values(selectedPeople)
    }

    getDataByName = (data=[], name='') => {
        return [{
            key: name,
            val: separateByCommas(data)
        }]
    }

    renderRows = data => {
        return data.map((el, index) => {
            if (!el.val) return null

            return (
                <tr key={ el.key + index }>
                    <td>{ el.key }</td>
                    <td>{ el.val }</td>
                </tr>
            )
        })

    }

    renderHomeLink = url => {
        if (!url) return null

        return (
            <a
                href={ url }
                className='movie-details__link'
                target='_blank'
                rel='noopener noreferrer'>
                homepage
            </a>
        )
    }

    renderBackdrops = images => {
        if (!this.props.movie.images) return null

        return <Backdrops images={ images }/>
    }

    renderCast = cast => {
        if (!this.props.credits.cast) return null

        return <Cast cast={ cast }/>
    }

    showImg = (file_path) => {
        this.props.toggleModal(
            modals.GALLERY_MODAL,
            true,
            { images: [{ file_path }] }
        )
    }
}

export default connect(state => ({
    movie: state.movies.movie,
    credits: state.movies.credits
}), {
    toggleModal
})(MovieDetails)
