import React, { Component } from 'react'
import { getImg } from './../../helpers'
import { connect } from 'react-redux'
import { toggleModal } from './../../ac'
import { modals } from './../../constants'

class Backdrops extends Component {
    render() {
        if (!this.props.images.backdrops.length) return null

        return (
            <div className='backdrops'>
                <h2 className='t2'>Backdrops</h2>
                <div className='backdrops__gallery u-scrollbar-x'>
                    { this.renderBackdrops(this.props.images) }
                </div>
            </div>
        )
    }

    renderBackdrops = images => {
        if (!images) return null

        return images.backdrops.map(el => {
            return (
                <img
                    key={el.file_path}
                    src={ getImg(el.file_path) }
                    onClick={ this.showImg }
                    alt=''/>
            )
        })
    }

    showImg = () => {
        this.props.toggleModal(modals.GALLERY_MODAL, true)
    }
}

export default connect(null, {
    toggleModal
})(Backdrops)
