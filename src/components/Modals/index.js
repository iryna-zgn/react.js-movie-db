import React, { Component } from 'react'
import GalleryModal from './../../components/Modals/GalleryModal'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { modals } from './../../constants'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Modals extends Component {
    static propTypes = {
        modalsState: PropTypes.object
    }

    render() {
        return (
            <div>
                <TransitionGroup>
                    { this.renderModals() }
                </TransitionGroup>
            </div>
        )
    }

    getModals = () => {
        return [
            {
                name: modals.GALLERY_MODAL,
                component: <GalleryModal/>
            }
        ]
    }

    renderModals = () => {
        return this.getModals().map((modal, index) => {
            if (!this.props.modalsState[`is${modal.name}`]) return null

            return (
                <CSSTransition
                    key={ modal.name + index }
                    classNames='fade'
                    timeout={{ appear: 300, enter: 300, exit: 300 }}>
                    <div>
                        { modal.component }
                    </div>
                </CSSTransition>
            )
        })
    }
}

export default connect(state => ({
    modalsState: state.modals
}))(Modals)
