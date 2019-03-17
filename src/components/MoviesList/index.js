import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Movie from './../Movie'
import Preloader from './../../components/Preloader'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { loadNextPage } from './../../ac'


class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired,
        genres: PropTypes.array.isRequired,
        pages: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
        loadNextPage: PropTypes.func.isRequired,
        loadingMore: PropTypes.bool,
        mode: PropTypes.string
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
        const { pages, page, loadingMore } = this.props

        if (pages > 1 && page !== pages ) {
            return <div className='more-load u-center'>
                {
                    loadingMore
                        ? <div
                            className='more-load__preloader'>
                            <Preloader />
                        </div>
                        : <div
                            onClick={ this.handleClickMore }
                            className='more-load__link'>
                            Load more
                        </div>
                }
            </div>
        }
    }

    handleClickMore = () => {
        const { page, mode, query } = this.props

        this.props.loadNextPage(page + 1, mode, query)
    }
}

export default connect(state => ({
    movies: state.movies.results,
    pages: state.movies.total_pages,
    page: state.movies.page,
    loadingMore: state.movies.loadingMore,
    genres: state.genres.genres,
    mode: state.movies.mode,
    query: state.movies.query
}), {
    loadNextPage
})(MoviesList)
