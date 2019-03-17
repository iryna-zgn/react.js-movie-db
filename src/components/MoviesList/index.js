import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Movie from './../Movie'
import Preloader from './../../components/Preloader'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { loadNextPage } from './../../ac'
import { URL_POPULAR } from './../../paths'


class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired,
        genres: PropTypes.array.isRequired,
        pages: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
        loadNextPage: PropTypes.func.isRequired,
        loading: PropTypes.bool
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
        const { pages, page, loading } = this.props

        if (pages > 1 && page !== pages ) {
            return <div className='u-center'>
                {
                    loading
                        ? <Preloader />
                        : <div
                            onClick={ this.handleClickMore }
                            className='more-link u-center'>
                            Load more
                        </div>
                }
            </div>
        }
    }

    handleClickMore = () => {
        fetch(`${URL_POPULAR}&page=${this.props.page + 1}`)
            .then(response => response.json())
            .then(data => this.props.loadNextPage({
                results: data.results,
                page: data.page
            }))
            .catch(error => console.log('error is', error))
    }
}

export default connect(state => ({
    movies: state.movies.results,
    pages: state.movies.total_pages,
    page: state.movies.page,
    loading: state.movies.loading,
    genres: state.genres.genres
}), {
    loadNextPage
})(MoviesList)
