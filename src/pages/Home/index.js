import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoviesList from './../../components/MoviesList'
import { loadMovies, loadGenres } from './../../ac'
import { connect } from 'react-redux'

class Home extends Component{
    static propTypes = {
        loadMovies: PropTypes.func,
        loadGenres: PropTypes.func
    }

    render() {
        return <MoviesList />
    }

    componentDidMount() {
        this.props.loadMovies()
        this.props.loadGenres()
    }
}


export default connect(null, {
    loadMovies,
    loadGenres
})(Home)
