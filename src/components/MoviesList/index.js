import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Movie from './../Movie'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { loadNextPage } from './../../ac'


class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired,
        genres: PropTypes.array.isRequired,
        pages: PropTypes.number
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
                key={movie.id}
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
        const { pages, loadNextPage } = this.props
        if (pages > 1) {
            return <div className='u-center'>
                <div
                    onClick={ loadNextPage }
                    className='more-link u-center'>
                    Load more
                </div>
            </div>
        }
    }
}

export default connect(state => ({
    movies: state.movies.results,
    pages: state.movies.total_pages,
    genres: state.genres.genres
}), {
    loadNextPage
})(MoviesList)
