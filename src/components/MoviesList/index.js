import React, { Component } from 'react'
import Movie from './../Movie'
import { urlPopular, urlGenreList } from './../../configPaths'

export default class MoviesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            genres: [],
            pages: null,
            page: 1
        }
    }

    fetchPopular = () => {
        fetch(`${urlPopular}${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState(state => ({
                movies: [...state.movies, ...data.results],
                pages: data.total_pages
            })))
    }

    fetchGenres = () => {
        fetch(urlGenreList)
            .then(response => response.json())
            .then(data => this.setState({
                genres: data.genres
            }))
    }

    loadNextPage = () => {
        this.setState(state => ({
            page: state.page + 1
        }), () => this.fetchPopular())
    }

    getMovieItems = () => {
        const movieItems = this.state.movies.map(movie => {
            return <div
                key={movie.id}
                className='movies-list__item'>
                <Movie
                    movie={ movie }
                    genres={ this.state.genres }/>
            </div>
        })

        return movieItems
    }

    componentDidMount() {
        this.fetchPopular()
        this.fetchGenres()
    }

    renderLoadMore = () => {
        if (this.state.pages > 1) {
            return <div className='u-center'>
                        <div
                            className='more-link u-center'
                            onClick={ this.loadNextPage }>
                            Load more
                        </div>
                    </div>
        }
    }

    render() {
        return (
            <div>
                <div className='movies-list'>{ this.getMovieItems() }</div>
                { this.renderLoadMore() }
            </div>
        )
    }
}
