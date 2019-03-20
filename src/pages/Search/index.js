import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoviesList from './../../components/MoviesList'
import { loadMovies, loadGenres } from './../../ac'
import { connect } from 'react-redux'
import { modes } from './../../constants'

class Search extends Component{
    static propTypes = {
        query: PropTypes.string,
        loadMovies: PropTypes.func,
        loadGenres: PropTypes.func
    }

    render() {
        return <MoviesList query={ this.props.query }/>
    }

    componentDidMount() {
        this.props.loadMovies(modes.SEARCH, this.props.query)
        this.props.loadGenres()
    }
}

export default connect(null, {
    loadMovies,
    loadGenres
})(Search)
