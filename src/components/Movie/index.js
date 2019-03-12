import React, { Component } from 'react'
import { urlImg } from './../../configPaths'
import { urlGenreList } from './../../configPaths'

export default class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genres: []
        }
    }

    componentDidMount() {
        fetch(urlGenreList)
            .then(response => response.json())
            .then(data => this.setState({
                genres: data.genres
            }))
    }

    render() {
        const { movie } = this.props

        return (
            <div className='movie'>
                <div
                    className='movie__img'
                    style={{backgroundImage: `url(${urlImg}${movie.poster_path})`}}>
                    <img
                        src='static/images/dummy_420x630.jpg'
                        alt=''
                        className='u-dummy'/>
                </div>
                <div>
                    <h2 className='movie__title'>{ movie.title }</h2>
                    <div className='movie__prop'>{ this.getGenres() }</div>
                    <div className='movie__prop'>{ this.getYear() }</div>
                    <div className='movie__desc'>{ movie.overview }</div>
                    <div className="movie__link">See more</div>
                </div>
            </div>
        )
    }

    getGenres = () => {
        const { movie } = this.props
        const genres = []

        movie.genre_ids.forEach(id => {
            this.state.genres.forEach(genre => {
                if (genre.id === id) {
                    genres.push(genre)
                }
            })
        })

        const genreItems = genres.map(genre => {
            return <span key={ genre.id }>{ genre.name } </span>
        })

        return genreItems
    }

    getYear = () => {
        const { movie } = this.props

        return movie.release_date.slice(0, 4)

    }
}
