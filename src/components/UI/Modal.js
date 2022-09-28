import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.scss'
import CardOverflow from '@mui/joy/CardOverflow'

const Backdrop = props => {
  return <div onClick={props.onClose} className={s.backdrop}></div>
}

const Overlay = props => {
  return (
    <CardOverflow
      variant='outlined'
      className={`p-4  ${props.className} ${s.overlay}`}>
      <div>{props.children}</div>
    </CardOverflow>
  )
}

const overlayContainer = document.getElementById('overlay')

const Modal = props => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, overlayContainer)}
      {createPortal(
        <Overlay className={props.className}>{props.children}</Overlay>,
        overlayContainer
      )}
    </Fragment>
  )
}

export default Modal
