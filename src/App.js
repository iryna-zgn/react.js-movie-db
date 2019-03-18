import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import MoviesList from './components/MoviesList'
import MoviePage from './components/MoviePage'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    static propTypes = {
        loading: PropTypes.bool
    }

    render() {
        return (
            <Router>
                <div className='container'>
                    <div>
                        <Header/>
                        <Route exact path='/' component={ MoviesList }/>
                        <Route path='/movie-:id' render={ this.getMoviePage }/>
                    </div>
                    <Footer/>
                    { this.renderPreloader() }
                </div>
            </Router>
        )
    }

    getMoviePage = ({ match }) => {
        const { id } = match.params
        return <MoviePage  id={ id }/>
    }

    renderPreloader = () => {
        if (this.props.loading) return <Preloader isFixed/>
    }
}

export default connect(state => ({
    loading: state.movies.loading
}))(App)
