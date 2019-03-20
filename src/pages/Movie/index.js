import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieDetails from './../../components/MovieDetails'
import { loadMovie, loadCredits } from './../../ac'
import { connect } from 'react-redux'

class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        loadMovie: PropTypes.func,
        loadCredits: PropTypes.func
    }

    render() {
        return <MovieDetails id={ this.props.id } />
    }

    componentDidMount() {
        this.props.loadMovie(this.props.id)
        this.props.loadCredits(this.props.id)
    }
}

export default connect(null, {
    loadMovie,
    loadCredits
})(Movie)