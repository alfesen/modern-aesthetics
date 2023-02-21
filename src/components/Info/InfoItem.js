import { Fragment, useState } from 'react'
import { Button, Alert, AlertTitle } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import { splitIntoParagraphs } from '../../helpers/splitIntoParagraphs'
import { useDispatch } from 'react-redux'
import { infoActions } from '../../store/info-slice'
import InfoForm from '../Administration/InfoAdministration/InfoForm'
import useAuth from '../../hooks/useAuth'

const InfoItem = props => {
  const [isAlert, setIsAlert] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const user = useAuth()

  const dispatch = useDispatch()

  const { id, title, content, titleType } = props
  const itemContent = splitIntoParagraphs(content)

  const removeItem = () => {
    dispatch(infoActions.removeItem(id))
  }

  const showAlert = () => {
    setIsAlert(true)
  }

  const closeAlert = () => {
    setIsAlert(false)
  }

  const handleEditing = () => {
    setIsEditing(true)
  }

  return (
    <Fragment>
      {isEditing ? (
        <InfoForm
          id={id}
          title={title}
          onClick={() => {
            setIsEditing(false)
          }}
          content={content}
          onSend='update'
          cancelMode='page'
        />
      ) : (
        <div
          className='d-flex flex-column align-items-start mb-4'
          key={id}
          id={id}>
          {isAlert && (
            <Alert
              className='my-3'
              severity='warning'
              action={
                <Fragment>
                  <Button
                    onClick={removeItem}
                    className='mx-2'
                    color='inherit'
                    size='small'>
                    Confirm
                  </Button>
                  <Button onClick={closeAlert} color='inherit' size='small'>
                    Cancel
                  </Button>
                </Fragment>
              }>
              <AlertTitle>Art thou certain?</AlertTitle>
            </Alert>
          )}
          <div className='d-flex justify-content-between w-100 align-items-center'>
            {titleType === 'h3' ? (
              <h3 style={{ letterSpacing: '1px' }}>{title}</h3>
            ) : (
              <h5 style={{ fontWeight: 'bold' }} className='mb-3'>
                {title}
              </h5>
            )}
            <div className='d-flex justify-content-end'>
              {user && (
                <Fragment>
                  <Button onClick={handleEditing}>
                    <EditIcon />
                  </Button>
                  <Button onClick={showAlert}>
                    <CloseIcon />
                  </Button>
                </Fragment>
              )}
            </div>
          </div>
          <div>{itemContent}</div>
        </div>
      )}
    </Fragment>
  )
}

export default InfoItem
