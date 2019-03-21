import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <div className='gallery'>
                <div className='gallery__arrow gallery__arrow--left icon-arrow-left'
                    onClick={ this.slideGalleryImg }/>
                {/*<img src={ this.props.img}/>*/}
                <img src='static/images/rho_light.jpg' alt=''/>
                <div className='gallery__arrow gallery__arrow--right icon-arrow-right'
                    onClick={ this.slideGalleryImg }/>
            </div>
        )
    }

    slideGalleryImg = () => {
        console.log('click')
    }
}
