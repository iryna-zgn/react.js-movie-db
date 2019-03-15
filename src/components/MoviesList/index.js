import React, { Component } from 'react'
import Movie from './../Movie'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


export default class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired,
        genres: PropTypes.array.isRequired
    }

    render() {
        const { movies, genres } = this.props

        const items = movies.map(movie => {
            return <CSSTransition
                        key={movie.id}
                        classNames='fade'
                        timeout={ 500 }>
                        <div className='movies-list__item'>
                            <Movie
                                movie={ movie }
                                genres={ genres }/>
                        </div>
                    </CSSTransition>
        })

        return (
            <div className='movies-list'>
                <TransitionGroup>
                    { items }
                </TransitionGroup>
            </div>
        )
    }
}
