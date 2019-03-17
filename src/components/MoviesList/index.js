import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Movie from './../Movie'
import LoadMore from './../LoadMore'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { loadMovies, loadGenres } from './../../ac'


class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired,
        genres: PropTypes.array.isRequired,
        pages: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
        loadMovies: PropTypes.func.isRequired,
        loadGenres: PropTypes.func.isRequired,
        loadingMore: PropTypes.bool,
        mode: PropTypes.string,
        query: PropTypes.string
    }

    render() {
        return (
            <div>
                <div className='movies-list'>
                    <TransitionGroup>
                        { this.renderItems() }
                    </TransitionGroup>
                </div>
                { this.renderLoadMore() }
            </div>
        )
    }

    componentDidMount() {
        this.props.loadMovies()
        this.props.loadGenres()
    }

    renderItems = () => {
        const { movies, genres } = this.props

        return movies.map(movie => {
            return <CSSTransition
                key={ movie.id }
                classNames='fade'
                timeout={{
                    appear: 500,
                    enter: 500,
                    exit: 500
                }}
                appear>
                <div className='movies-list__item'>
                    <Movie
                        movie={ movie }
                        genres={ genres }/>
                </div>
            </CSSTransition>
        })
    }

    renderLoadMore = () => {
        const { pages, page } = this.props

        if (pages > 1 && page !== pages ) return <LoadMore/>
    }
}

export default connect(state => ({
    movies: state.movies.results,
    genres: state.genres.genres,
    pages: state.movies.total_pages,
    page: state.movies.page,
    loadingMore: state.movies.loadingMore,
    mode: state.movies.mode,
    query: state.movies.query
}), {
    loadMovies,
    loadGenres
})(MoviesList)
