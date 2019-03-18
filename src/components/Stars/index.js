import React, { Component } from 'react'

export default class Stars extends Component {
    render() {
        return (
            <div className='stars'>
                { this.renderFilledStars() }
            </div>
        )
    }

    renderFilledStars = () => {
        const stars = []

        for (let i = 0; i < this.props.count; i++) {
            stars.push(<span className='icon-star-filled'></span>)
        }

        for (let i = 0; i < 5 - this.props.count; i++) {
            stars.push(<span className='icon-star'></span>)
        }

        return stars.map((star, index) => {
            return <div key = { index } className='stars__item'>{ star }</div>
        })
    }
}
