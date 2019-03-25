import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getImg } from './../../helpers'
import { connect } from 'react-redux'
import { toggleModal } from './../../ac'
import { modals } from './../../constants'

class Backdrops extends Component {
    static propTypes = {
        images: PropTypes.shape({
            backdrops: PropTypes.array
        }),
        toggleModal: PropTypes.func
    }

    render() {
        if (!this.props.images) return null

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
        if (!images.backdrops) return null

        return images.backdrops.map((el, index) => {
            return (
                <img
                    key={el.file_path}
                    src={ getImg(el.file_path) }
                    onClick={ () => this.showImg(index) }
                    alt=''/>
            )
        })
    }

    showImg = (index) => {
        this.props.toggleModal(
            modals.GALLERY_MODAL,
            true,
            {
                images: this.props.images.backdrops,
                index
            }
        )
    }
}

export default connect(null, {
    toggleModal
})(Backdrops)
