import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

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
                        <Switch>
                            <Route exact path='/' component={ MoviesList }/>
                            <Route path='/movie-:id' render={ this.getMovieDetails }/>
                        </Switch>
                    </div>
                    <Footer/>
                    { this.renderPreloader() }
                </div>
            </Router>
        )
    }

    getMovieDetails = ({ match }) => {
        const { id } = match.params
        return <MovieDetails  id={ id }/>
    }

    renderPreloader = () => {
        if (this.props.loading) return <Preloader isFixed/>
    }
}

export default connect(state => ({
    loading: state.movies.loading
}))(App)
