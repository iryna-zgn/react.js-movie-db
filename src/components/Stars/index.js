import React, { Component } from 'react'

export default class Stars extends Component {
    render() {
        if (!this.props.evaluation) return null

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
        const count = this.getCount(this.props.evaluation)
        const stars = new Array(5).fill('')

        stars.fill('-filled', 0, count)

        return stars.map((star, index) => {
            return (
                <div key = { index } className='evaluation__stars-item'>
                    <span className={`icon-star${star}`}/>
                </div>
            )
        })
    }

    getCount = evaluation => Math.round(evaluation / 2)
}
