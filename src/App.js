import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './components/Header'
import MoviesList from './components/MoviesList'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { urlPopular, urlSearch, urlGenreList } from './paths'
import { modes } from './constants'

class App extends Component {
    static propTypes = {
        searchingStr: PropTypes.string,
        mode: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            genres: [],
            results: 0,
            pages: 1,
            page: 1,
            isPreloader: false,
            isLoaded: false
        }
    }

    getLoadUrl = () => {
        return this.props.mode === modes.POPULAR
            ? `${urlPopular}&page=${this.state.page}`
            : `${urlSearch}&query=${this.props.searchingStr}&page=${this.state.page}`
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

    loadNextPage = () => {
        this.setState(state => ({
            page: state.page + 1,
            isPreloader: true
        }), () => this.fetchMovies())
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

    renderMoviesList = () => {
        if (this.state.results) {
            return <MoviesList
                        movies={ this.state.movies }
                        genres={ this.state.genres }/>
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div>
                    <Header/>
                    { this.renderMoviesList() }
                    { this.renderLoadMore() }
                </div>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        this.fetchMovies()
        this.fetchGenres()
    }
}

export default connect(state => ({
    searchingStr: state.movies.searchingStr,
    mode: state.movies.mode
}))(App)
