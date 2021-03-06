import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Movie from './../Movie'
import LoadMore from './../LoadMore'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'


class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array,
        genres: PropTypes.array,
        pages: PropTypes.number,
        page: PropTypes.number
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
            return (
                <CSSTransition
                    key={ movie.id }
                    classNames='fade'
                    timeout={{ appear: 300, enter: 300, exit: 300 }}
                    appear>
                    <div className='movies-list__item'>
                        <Movie
                            movie={ movie }
                            genres={ genres }/>
                    </div>
                </CSSTransition>
            )
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
    page: state.movies.page
}))(MoviesList)
