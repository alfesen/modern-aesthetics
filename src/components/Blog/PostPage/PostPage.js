import { Fragment } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Card, Avatar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import s from './PostPage.module.scss'
import { splitIntoParagraphs } from '../../../helpers/splitIntoParagraphs'

const PostPage = () => {

  const blogItems = useSelector(state => state.blog.items)
  const isRendered = useSelector(state => state.blog.blogIsRendered)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const postId = queryParams.get('post')

  const allPosts = []

  blogItems.forEach(item => {
    for (const post of item.posts) {
      if (post.id === postId) {
        allPosts.push({ ...post, author: item.author, image: item.image })
      }
    }
  })

  const post = allPosts.find(post => post.id === postId)

  return (
    <Card className={`p-5 text-center`}>
      {isRendered && (
        <Fragment>
          <h2>{post.title}</h2>
          <hr />
          <div
            className={`d-flex justify-content-center align-items-center py-3 mb-3`}>
            <Avatar className={`mx-3`} src={post.image} alt={post.author} />
            <Link to={`blog?author=${post.author}`}>{post.author}</Link>
          </div>
          <div className={`${s.post__content} px-md-3 `}>
            <Typography component={'span'}>
              {splitIntoParagraphs(post.content)}
            </Typography>
          </div>
          <p className={s.post__signature}>
            &copy; This article was written by {post.author} {post.date}
          </p>
        </Fragment>
      )}
    </Card>
  )
}

export default PostPage
