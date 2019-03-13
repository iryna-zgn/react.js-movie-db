import React, { Component } from 'react'
import { urlImg } from './../../configPaths'

export default class Movie extends Component {
    render() {
        const { movie } = this.props
        console.log(movie)

        return (
            <div className='movie'>
                <div
                    className='movie__img'
                    style={{ backgroundImage: `url(${urlImg}${movie.poster_path})` }}>
                    <img
                        src='static/images/dummy_420x630.jpg'
                        alt=''
                        className='u-dummy'/>
                </div>
                <div>
                    <h2 className='movie__title'>
                        { movie.title }
                    </h2>
                    <div className='movie__prop'>
                        { this.getGenres(movie.genre_ids) }
                    </div>
                    <div className='movie__prop'>
                        { this.getYear(movie.release_date) }
                    </div>
                    <div className='movie__desc'>{ movie.overview }</div>
                    <div className="movie__link">Read more</div>
                </div>
            </div>
        )
    }

    getYear = date => date.slice(0, 4)

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

        const genreItems = currentGenres.map((genre, index) => {
            return <span key={ genre.id }>
                        { (index ? `, ${genre.name.toLowerCase()}` : genre.name) }
                    </span>
        })

        return genreItems
    }
}
