import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import MoviesList from './components/MoviesList'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { connect } from 'react-redux'

class App extends Component {
    static propTypes = {
        loading: PropTypes.bool
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <Header/>
                    <MoviesList/>
                </div>
                <Footer/>
                { this.renderPreloader() }
            </div>
        )
    }

    renderPreloader = () => {
        if (this.props.loading) return <Preloader isFixed/>
    }
}

export default connect(state => ({
    loading: state.movies.loading
}))(App)
