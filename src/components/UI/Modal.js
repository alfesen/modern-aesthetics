import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.scss'
import CardOverflow from '@mui/joy/CardOverflow'

const Backdrop = props => {
  return <div onClick={props.onClose} className={s.backdrop}></div>
}

const Overlay = props => {
  const { className, children } = props
  return (
    <CardOverflow
      variant='outlined'
      className={`p-4  ${className} ${s.overlay}`}>
      <div>{children}</div>
    </CardOverflow>
  )
}

const overlayContainer = document.getElementById('overlay')

const Modal = props => {
  const { onClose, className, children } = props

  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose} />, overlayContainer)}
      {createPortal(
        <Overlay className={className}>{children}</Overlay>,
        overlayContainer
      )}
    </Fragment>
  )
}

export default Modal
