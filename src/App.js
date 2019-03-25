import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Home from './pages/Home'
import Search from './pages/Search'
import Movie from './pages/Movie'
import Footer from './components/Footer'
import Modals from './components/Modals'
import Preloader from './components/Preloader'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
    static propTypes = {
        query: PropTypes.string,
        loading: PropTypes.bool,
        totalResults: PropTypes.number
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route path='/search/:query' render={ this.getSearch }/>
                        <Route path='/movie/:id' render={ this.getMovie }/>
                    </Switch>
                </div>
                <div>
                  <Footer/>
                  <Modals/>
                  { this.renderPreloader() }
                </div>
            </div>
        )
    }

    getSearch = ({ match }) => {
        const { query } = match.params
        return <Search query={ query }/>
    }

    getMovie = ({ match }) => {
        const { id } = match.params
        if (this.props.totalResults) {
            return <Movie  id={ id }/>
        }
    }

    renderPreloader = () => {
        if (this.props.loading) return <Preloader isFixed/>
    }
}

export default connect(state => ({
    totalResults: state.movies.total_results,
    query: state.movies.query,
    loading: state.movies.loading
}))(App)
