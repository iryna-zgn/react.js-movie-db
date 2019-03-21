import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleModal } from './../../ac'

class Modal extends Component {
    static propTypes = {
        name: PropTypes.string,
        toggleModal: PropTypes.func
    }

    render() {
        return (
            <div className='modal'>
                <div className='modal__backdrop' onClick={ this.closeModal }/>
                <span className='modal__close' onClick={ this.closeModal }>
                        &times;
                    </span>
                <div className='modal__container'>
                    { this.props.children }
                </div>
            </div>
        )
    }

    closeModal = () => {
        this.props.toggleModal(this.props.name, false)
    }
}

export default connect(null, {
    toggleModal
})(Modal)
