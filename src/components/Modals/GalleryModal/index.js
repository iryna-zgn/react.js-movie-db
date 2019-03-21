import React from 'react'
import Modal from './../../../components/Modal'
import Gallery from './../../../components/Gallery'

export default function GalleryModal(props) {
    return (
        <Modal name={ props.name }>
            <Gallery/>
        </Modal>
    )
}
