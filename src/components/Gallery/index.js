import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getImg } from './../../helpers'

class Gallery extends Component {
	static propTypes = {
		gallery: PropTypes.shape({
			images: PropTypes.array,
			index: PropTypes.number
		})
	}

	state = {
		index: this.props.gallery.index || 0
	}

	render() {
		return (
			<div className='gallery'>
				{ this.renderArrow('left', 'prev') }
				{ this.renderImage() }
				{ this.renderArrow('right', 'next') }
			</div>
		)
	}

	renderImage = () => {
		if (!this.props.gallery) return null

		const { index } = this.state
		const images = this.props.gallery.images

		return (
			<img src={ getImg(images[index].file_path) } alt=''/>
		)
	}

	renderArrow = (arrow, name) => {
		if (!this.props.gallery) return null

		if (this.props.gallery.images.length > 1) {
			return (
				<div className={`gallery__arrow gallery__arrow--${arrow} icon-arrow-${arrow}`}
					 title={ name }
					 onClick={ () => this.getIndex(name) }/>
			)
		}
	}

	getIndex = (arrow) => {
		if (!this.props.gallery) return null

		const len = this.props.gallery.images.length
		const { index } = this.state

		if (arrow === 'next') {
			this.setState({
				index: index === len - 1 ? 0 : index + 1
			})
		} else if (arrow === 'prev') {
			this.setState({
				index: index === 0 ? len - 1 : index - 1
			})
		}
	}

	componentDidMount() {
		if (this.props.gallery.images.length > 1) {
			window.addEventListener('keydown', e => {
				if (e.keyCode === 37) {
					this.getIndex('prev')
				} else if (e.keyCode === 39) {
					this.getIndex('next')
				}
			})
		}
	}
}

export default connect(state => ({
	gallery: state.modals.parameter
}))(Gallery)
