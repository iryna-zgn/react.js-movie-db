import React, { Component } from 'react'
import MoviesList from './components/MoviesList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <header>Header</header>

          <MoviesList />

        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App
