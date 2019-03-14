import React, { Component } from 'react'
import MoviesList from './components/MoviesList'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <Header/>
          <MoviesList/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App
