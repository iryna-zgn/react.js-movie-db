import React, { Component } from 'react'

export default class Stars extends Component {
    render() {
        return (
            <div className='evaluation'>
                <div className='evaluation__stars'>
                    { this.renderFilledStars() }
                </div>
                <span>{ this.props.count }</span>
            </div>
        )
    }

    renderFilledStars = () => {
        const { evaluation } = this.props
        const stars = []

        for (let i = 0; i < this.getStarCount(evaluation); i++) {
            stars.push(<span className='icon-star-filled'></span>)
        }

        for (let i = 0; i < 5 - this.getStarCount(evaluation); i++) {
            stars.push(<span className='icon-star'></span>)
        }

        return stars.map((star, index) => {
            return <div key = { index } className='evaluation__stars-item'>{ star }</div>
        })
    }

    getStarCount = evaluation => Math.round(evaluation / 2)
}