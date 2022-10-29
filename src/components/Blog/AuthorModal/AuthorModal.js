import Modal from '../../UI/Modal'
import Avatar from '@mui/material/Avatar'
import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import s from './AuthorModal.module.scss'

const AuthorModal = props => {
  const { onClose, author } = props

  const blogItems = useSelector(state => state.blog.items)
  const authorData = blogItems.filter(item => item.author === author)

  const location = useLocation()

  let authorName
  let authorBio
  let authorImg
  let posts

  for (const item of authorData) {
    authorName = item.author
    authorBio = item.biography
    authorImg = item.image
    posts = item.posts
  }

  const postItems = posts.map(post => {
    return (
      <Fragment key={post.id}>
        <h3>{post.title}</h3>
        <p>
          {post.content.substring(0, 250) + '...'}
          {'  '}
          <Link
            onClick={onClose}
            to={`${location.pathname}/post?post=${post.id}`}>
            Read more...
          </Link>
        </p>
      </Fragment>
    )
  })

  return (
    <Modal onClose={onClose}>
      <div
        className='d-flex justify-content-between
      align-items-center m-4'>
        <Avatar
          src={authorImg}
          alt={author}
          sx={{ height: 75, width: 75 }}></Avatar>
        <h2>{author}</h2>
      </div>
      <hr />
      <p className='primary'>
        <span className={s.span}>Bio: </span>
        {authorName.includes(author) && authorBio}
      </p>
      {postItems}
    </Modal>
  )
}

export default AuthorModal
