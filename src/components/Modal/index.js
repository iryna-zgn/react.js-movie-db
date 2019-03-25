import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleModal } from './../../ac'
import { classes } from './../../constants'

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

    toggleBodyFixed = () => {
        document.querySelector('html').classList.toggle(classes.IS_FIXED)
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.key === 'Backspace') {
                this.closeModal()
            }
        })
        this.toggleBodyFixed()
    }

    componentWillUnmount() {
        this.toggleBodyFixed()
    }
}

export default connect(null, {
    toggleModal
})(Modal)
