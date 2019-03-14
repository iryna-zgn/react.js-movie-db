import React, { Component } from 'react'
import Movie from './../Movie'
import Preloader from './../Preloader'
import { urlPopular, urlSearch, urlGenreList } from './../../configPaths'

export default class MoviesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            genres: [],
            pages: null,
            page: 1,
            searchingStr: '',
            mode: 'popular',
            isPreloader: false
        }
    }

    getLoadUrl = () => {
        return this.state.mode === 'popular'
            ? `${urlPopular}&page=${this.state.page}`
            : `${urlSearch}&query=${this.state.searchingStr}&page=${this.state.page}`
    }

    fetchMovies = () => {
        fetch(this.getLoadUrl())
            .then(response => response.json())
            .then(data => this.setState(state => ({
                movies: [...state.movies, ...data.results],
                pages: data.total_pages
            })))
            .then(() => this.setState({
                isPreloader: false
            }))
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
            page: state.page + 1,
            isPreloader: true
        }), () => this.fetchMovies())
    }

    setSearchingStr = (e) => {
        this.setState({
            searchingStr: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.searchingStr.length) {
            this.setState(state => ({
                movies: [],
                page: 1,
                pages: 0,
                mode: 'search'
            }), () => this.fetchMovies())
        }
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

    renderLoadMore = () => {
        if (this.state.pages > 1 && this.state.page !== this.state.pages) {
            return <div className='u-center'>
                {
                    this.state.isPreloader
                        ? <Preloader />
                        : <div
                            className='more-link u-center'
                            onClick={ this.loadNextPage }>
                            Load more
                        </div>
                }
            </div>
        }
    }

    componentDidMount() {
        this.fetchMovies()
        this.fetchGenres()
    }

    render() {
        return (
            <div>

                {/*make a component*/}
                <form
                    className='search'
                    onSubmit={ this.handleSubmit }>
                    <input
                        value={ this.state.searchingStr }
                        className='search__input'
                        type='text'
                        onChange={ this.setSearchingStr }/>
                    <button className='search__btn icon-search'/>
                </form>
                {/*make a component*/}

                <div className='movies-list'>{ this.getMovieItems() }</div>
                { this.renderLoadMore() }
            </div>
        )
    }
}
