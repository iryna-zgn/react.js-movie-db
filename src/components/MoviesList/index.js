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
            results: 0,
            pages: 1,
            page: 1,
            mode: 'popular',
            searchingStr: '',
            isPreloader: false,
            isLoaded: false
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
                pages: data.total_pages,
                results: data.total_results,
                isLoaded: true
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

    switchMode = (mode) => {
        if (mode === 'popular') {
            this.setState({
                searchingStr: ''
            })
        }
        this.setState(state => ({
            movies: [],
            page: 1,
            pages: 1,
            mode: mode
        }), () => this.fetchMovies())
    }

    loadNextPage = () => {
        this.setState(state => ({
            page: state.page + 1,
            isPreloader: true
        }), () => this.fetchMovies())
    }

    loadPopular = () => {
        this.switchMode('popular')
    }

    setSearchingStr = (e) => {
        this.setState({
            searchingStr: e.target.value
        })
    }

    submitSearch = (e) => {
        e.preventDefault()
        this.switchMode(this.state.searchingStr.length ? 'search' : 'popular')
    }

    renderMoviesList = () => {
        const items = this.state.movies.map(movie => {
            return <div
                key={movie.id}
                className='movies-list__item'>
                <Movie
                    movie={ movie }
                    genres={ this.state.genres }/>
            </div>
        })

        if (this.state.movies.length) {
            return <div className='movies-list'>{ items }</div>
        }
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

    renderSearchMsg = () => {
        if (!this.state.results && this.state.isLoaded) {
            return <div>
                <div className='search__msg'>No results :(</div>
                <div
                    onClick={ this.loadPopular }
                    className='search__link'>
                    Popular movies
                </div>
            </div>
        }
    }

    componentWillMount() {
        this.fetchMovies()
        this.fetchGenres()
    }

    render() {
        return (
            <div>

                {/*make a component*/}
                <div className='search'>
                    <form
                        className='search__form'
                        onSubmit={ this.submitSearch }>
                        <input
                            value={ this.state.searchingStr }
                            className='search__input'
                            type='text'
                            onChange={ this.setSearchingStr }/>
                        <button className='search__btn icon-search'/>
                    </form>
                    { this.renderSearchMsg() }
                </div>

                { this.renderMoviesList() }
                { this.renderLoadMore() }
            </div>
        )
    }
}
