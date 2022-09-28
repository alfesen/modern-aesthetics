import { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import s from './BlogItem.module.scss'
import Card from '@mui/material/Card'
import TagCard from '../../UI/TagCard'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Avatar, Alert, AlertTitle } from '@mui/material'
import { useDispatch } from 'react-redux'
import { blogActions } from '../../../store/blog-slice'
import { auth } from '../../../firebase'
import { onAuthStateChanged } from 'firebase/auth'

import { splitIntoParagraphs } from '../../../helpers/splitIntoParagraphs'

const BlogItem = props => {
  const [tagsAreVisible, setTagsAreVisible] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [user, setUser] = useState({})
  const dispatch = useDispatch()

  const toggleTags = () => {
    setTagsAreVisible(!tagsAreVisible)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })

    return unsubscribe
  }, [])

  const showAlert = () => {
    setIsAlert(true)
  }

  const closeAlert = () => {
    setIsAlert(false)
  }

  const removeItem = () => {
    dispatch(
      blogActions.removeItemFromBlog({ id: props.id, author: props.author })
    )
    closeAlert()
  }

  const content = splitIntoParagraphs(props.content)

  return (
    <Card
      id={props.id}
      variant='outlined'
      className={`${s['blog-item']} ${props.className} mb-3`}>
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
      <div className='d-flex flex-column align-items-between'>
        <div className='d-flex justify-content-between'>
          <h3>{props.title}</h3>
          {user && (
            <Button onClick={showAlert}>
              <CloseIcon />
            </Button>
          )}
        </div>
        <Button className={`py-2 px-0 align-self-start`} onClick={toggleTags}>
          Show tags
        </Button>
        {tagsAreVisible && <TagCard tags={props.tags} />}
      </div>
      <hr />
      <div className='py-3'>
        <p>{content}</p>
      </div>
      <hr />
      <div className='d-flex align-items-center justify-content-between'>
        <Button className={s.author}>
          <Link
            className={`d-flex align-items-center`}
            to={`/blog?author=${props.author}`}>
            <Avatar sx={{ marginRight: '10px' }} src={props.avatar}></Avatar>
            {props.author}
          </Link>
        </Button>
        <p className={`d-flex align-self-end`}>{props.date}</p>
      </div>
    </Card>
  )
}

export default BlogItem
