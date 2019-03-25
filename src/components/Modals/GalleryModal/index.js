import React from 'react'
import Modal from './../../../components/Modal'
import Gallery from './../../../components/Gallery'
import { modals } from './../../../constants'

export default function GalleryModal() {
    return (
        <Modal name={ modals.GALLERY_MODAL }>
            <Gallery/>
        </Modal>
    )
}
