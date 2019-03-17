import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import MoviesList from './components/MoviesList'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { connect } from 'react-redux'
import { loadMovies, loadGenres } from './ac'
// import { URL_POPULAR, URL_SEARCH, URL_GENRES } from './paths'
// import { modes } from './constants'

class App extends Component {
    static propTypes = {
        loadMovies: PropTypes.func.isRequired,
        loadGenres: PropTypes.func.isRequired,
        loading: PropTypes.bool
    }

    // static propTypes = {
    //     query: PropTypes.string,
    //     mode: PropTypes.string
    // }

    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         movies: [],
    //         genres: [],
    //         results: 0,
    //         pages: 1,
    //         page: 1,
    //         loading: false,
    //         isLoaded: false
    //     }
    // }

    // getLoadUrl = () => {
    //     return this.props.mode === modes.POPULAR
    //         ? `${URL_POPULAR}&page=${this.state.page}`
    //         : `${URL_SEARCH}&query=${this.props.query}&page=${this.state.page}`
    // }

    // fetchMovies = () => {
    //     fetch(this.getLoadUrl())
    //         .then(response => response.json())
    //         .then(data => this.setState(state => ({
    //             movies: [...state.movies, ...data.results],
    //             pages: data.total_pages,
    //             results: data.total_results,
    //             isLoaded: true
    //         })))
    //         .then(() => this.setState({
    //             loading: false
    //         }))
    // }

    // fetchGenres = () => {
    //     fetch(URL_GENRES)
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             genres: data.genres
    //         }))
    // }

    // loadNextPage = () => {
    //     this.setState(state => ({
    //         page: state.page + 1,
    //         loading: true
    //     }), () => this.fetchMovies())
    // }

    // renderLoadMore = () => {
    //     if (this.state.pages > 1 && this.state.page !== this.state.pages) {
    //         return <div className='u-center'>
    //             {
    //                 this.state.loading
    //                     ? <Preloader />
    //                     : <div
    //                         className='more-link'
    //                         onClick={ this.loadNextPage }>
    //                         Load more
    //                         </div>
    //             }
    //         </div>
    //     }
    // }

    render() {
        return (
            <div className='container'>
                <div>
                    <Header/>
                    <MoviesList/>
                </div>
                <Footer/>
                { this.renderPreloader() }
            </div>
        )
    }

    componentDidMount() {
        this.props.loadMovies()
        this.props.loadGenres()
    }

    renderPreloader = () => {
        if (this.props.loading) return <Preloader isFixed/>
    }
}

export default connect(state => ({
    loading: state.movies.loading
}), {
    loadMovies,
    loadGenres
})(App)
