import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMovie } from './../../ac'
import { URL_IMG } from '../../paths'

class MoviePage extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        loadMovie: PropTypes.func.isRequired,
        movie: PropTypes.object
    }

    render() {
        const { movie } = this.props

        return <div>
            <h1>{movie.title }</h1>
            <a href={ movie.homepage } className='u-link'>homepage</a>
            <p>{ movie.overview }</p>
            <img src={ this.getImg(movie.poster_path) } alt=""/>
            { this.renderImages(movie.images) }
            <div>budget: { movie.budget }</div>
            {/*<div>genres: { movie.genres }</div>*/}
            <div>original_language: { movie.original_language }</div>
            <div>original_title: { movie.original_title }</div>
            <div>popularity: { movie.popularity }</div>
            {/*<div>production_companies: { movie.production_companies }</div>*/}
            {/*<div>production_countries: { movie.production_countries }</div>*/}
            <div>release_date: { movie.release_date }</div>
            <div>status: { movie.status }</div>
            <div>video: { movie.video }</div>
            <div>vote_average: { movie.vote_average }</div>
            <div>vote_count: { movie.vote_count }</div>
        </div>
    }

    componentDidMount() {
        this.props.loadMovie(this.props.id)
    }

    getImg = img => img ? `${URL_IMG}${img}` : 'static/images/rho_light.jpg'

    renderImages = images => {
        if (images) {
            return images.backdrops.map(el => {
                return <div key={el.file_path}>
                        <img src={ this.getImg(el.file_path) } alt=''/>
                        </div>
            })
        }
    }
}

export default connect(state => ({
    movie: state.movies.movie
}), { loadMovie })(MoviePage)
