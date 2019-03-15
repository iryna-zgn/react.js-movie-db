import React, { Component } from 'react'
import MoviesList from './components/MoviesList'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { urlPopular, urlSearch, urlGenreList } from './configPaths'

class App extends Component {
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

        this.textInput = React.createRef()
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
        this.setState(state => ({
            movies: [],
            page: 1,
            pages: 1,
            mode: mode,
            searchingStr: mode === 'popular' ? '' : this.state.searchingStr
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
                <div className='u-small'>No results :(</div>
                <div
                    onClick={ this.loadPopular }
                    className='u-link'>
                    Popular movies
                </div>
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

    addFocus = () => {
        this.textInput.current.classList.add('is-focused')
    }

    removeFocus = e => {
        if (this.textInput && !this.textInput.current.contains(e.target)) {
            this.textInput.current.classList.remove('is-focused')
        }
    }

    componentWillMount() {
        this.fetchMovies()
        this.fetchGenres()
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Header/>

                    {/*make a component*/}
                    <div className='search'>
                        <form
                            className='search__form'
                            onSubmit={ this.submitSearch }>
                            <div
                                ref={this.textInput}
                                className='search__field'
                                onClick={ this.addFocus }>
                                <input
                                    value={ this.state.searchingStr }
                                    type='text'
                                    onChange={ this.setSearchingStr }/>
                            </div>
                            <button className='search__btn icon-search'/>
                        </form>
                        { this.renderSearchMsg() }
                    </div>

                    { this.renderMoviesList() }
                    { this.renderLoadMore() }
                </div>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        document.addEventListener('click', this.removeFocus)
    }
}

export default App
