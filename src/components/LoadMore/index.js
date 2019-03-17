import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Preloader from './../../components/Preloader'
import { connect } from 'react-redux'
import { loadNextPage } from './../../ac'


class LoadMore extends Component {
    static propTypes = {
        page: PropTypes.number.isRequired,
        loadNextPage: PropTypes.func.isRequired,
        loadingMore: PropTypes.bool,
        mode: PropTypes.string,
        query: PropTypes.string
    }

    render() {
        return (
            <div className='load-more'>
                {
                    this.props.loadingMore
                        ? <div
                        className='load-more__preloader'>
                        <Preloader />
                    </div>
                        : <div
                        onClick={ this.handleClickMore }
                        className='load-more__link'>
                        Load more
                    </div>
                }
            </div>
        )
    }

    handleClickMore = () => {
        const { page, mode, query } = this.props

        this.props.loadNextPage(page + 1, mode, query)
    }
}

export default connect(state => ({
    page: state.movies.page,
    loadingMore: state.movies.loadingMore,
    mode: state.movies.mode,
    query: state.movies.query
}), {
    loadNextPage
})(LoadMore)
